/* =========================================
   EduCRM — logic.js
   Full CRM logic: data, filtering, CRUD,
   pagination, sorting, analytics, modals
========================================= */

// ─── INITIAL DATA (50 students) ───────────────────────────────────────────────
const COLLEGES = [
  "IIT Delhi", "IIT Bombay", "NIT Trichy", "BITS Pilani",
  "DU North Campus", "JNU Delhi", "Amity University", "Manipal Institute",
  "VIT Vellore", "Anna University", "SRM Institute", "Jadavpur University",
  "Pune University", "BHU Varanasi", "Osmania University"
];
const STATUSES = ["Query Generated", "Under Review", "Follow Up", "Successful", "Rejected"];
const COURSES   = ["B.Tech CSE", "B.Tech ECE", "BBA", "MBA", "B.Com", "BA Economics", "B.Sc Physics", "B.Tech Mech", "M.Tech AI", "MCA"];
const CITIES    = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Jaipur", "Lucknow", "Bhopal"];
const NAMES_F   = ["Aarav", "Arjun", "Rohit", "Vikram", "Karan", "Suresh", "Rahul", "Amit", "Nikhil", "Deepak",
                   "Riya", "Priya", "Sneha", "Pooja", "Ananya", "Kavya", "Divya", "Neha", "Simran", "Ishaan",
                   "Aditya", "Pranav", "Siddharth", "Varun", "Kunal", "Meera", "Shruti", "Tanya", "Pallavi", "Swati",
                   "Vivek", "Harsh", "Akash", "Rajesh", "Manish", "Nisha", "Ankita", "Rekha", "Sunita", "Geeta",
                   "Yash", "Ayaan", "Kabir", "Dhruv", "Aryan", "Lalit", "Naman", "Gaurav", "Saurabh", "Bhavya"];
const SURNAMES  = ["Sharma", "Verma", "Singh", "Gupta", "Patel", "Kumar", "Mishra", "Joshi", "Tiwari", "Yadav",
                   "Kapoor", "Malhotra", "Mehta", "Shah", "Reddy", "Nair", "Iyer", "Pillai", "Das", "Mukherjee"];

function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rndInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function rndDate() {
  const y = rndInt(2022, 2024);
  const m = String(rndInt(1, 12)).padStart(2, '0');
  const d = String(rndInt(1, 28)).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
function genId(i) { return `STU-${2023 + Math.floor(i/20)}-${String(i+1).padStart(3,'0')}`; }

let students = Array.from({ length: 50 }, (_, i) => {
  const name = `${rnd(NAMES_F)} ${rnd(SURNAMES)}`;
  return {
    id:           i + 1,
    name,
    studentId:    genId(i),
    email:        name.toLowerCase().replace(' ', '.') + `${rndInt(1,99)}@gmail.com`,
    phone:        `+91 ${rndInt(70000,99999)}${rndInt(10000,99999)}`,
    college:      rnd(COLLEGES),
    course:       rnd(COURSES),
    city:         rnd(CITIES),
    admissionFee: rndInt(25, 200) * 1000,
    status:       rnd(STATUSES),
    date:         rndDate(),
    notes:        "",
  };
});

// Load from localStorage if available
function loadFromStorage() {
  try {
    const saved = localStorage.getItem('educrm_students');
    if (saved) students = JSON.parse(saved);
  } catch(e) {}
}
function saveToStorage() {
  try { localStorage.setItem('educrm_students', JSON.stringify(students)); } catch(e) {}
}
loadFromStorage();

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentView   = 'dashboard';
let filterStatus  = '';
let filterCollege = '';
let searchQuery   = '';
let sortCol       = 'name';
let sortDir       = 'asc';
let currentPage   = 1;
const PAGE_SIZE   = 10;
let editingId     = null;
let viewFilter    = '';   // e.g. 'Successful' when nav clicked

// ─── STATUS CONFIG ─────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  "Query Generated": { cls: 'query',    icon: 'fa-circle-dot' },
  "Under Review":    { cls: 'review',   icon: 'fa-magnifying-glass' },
  "Follow Up":       { cls: 'followup', icon: 'fa-phone-volume' },
  "Successful":      { cls: 'success',  icon: 'fa-circle-check' },
  "Rejected":        { cls: 'rejected', icon: 'fa-circle-xmark' },
};

function statusBadgeHTML(status) {
  const cfg = STATUS_CONFIG[status] || { cls: 'query', icon: 'fa-circle' };
  return `<span class="status-badge ${cfg.cls}"><i class="fa-solid ${cfg.icon}"></i>${status}</span>`;
}

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function formatFee(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}
function formatDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
function initials(name) {
  return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0,2);
}
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  const icons = { success: '✓', error: '✗', info: 'ℹ' };
  t.innerHTML = `<span>${icons[type]||'ℹ'}</span> ${msg}`;
  t.className = `toast show ${type}`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function navigateTo(view, statusOverride) {
  // Deactivate all nav items & views
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));

  // Match nav item
  const navEl = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (navEl) navEl.classList.add('active');

  // Map special nav views to students table with filter
  const statusViews = { followup: 'Follow Up', pending: 'Under Review', successful: 'Successful', rejected: 'Rejected' };

  if (statusViews[view]) {
    viewFilter = statusViews[view];
    filterStatus = statusViews[view];
    document.getElementById('filter-status').value = viewFilter;
    showView('students');
    currentView = 'students';
  } else {
    viewFilter = '';
    filterStatus = '';
    if (view === 'students') document.getElementById('filter-status').value = '';
    showView(view);
    currentView = view;
  }

  document.getElementById('page-title').textContent = {
    dashboard: 'Dashboard', students: 'All Students',
    followup: 'Follow Up', pending: 'Under Review',
    successful: 'Successful', rejected: 'Rejected',
    'add-student': 'Add Student', analytics: 'Analytics'
  }[view] || 'Dashboard';

  if (currentView === 'students') {
    currentPage = 1;
    renderTable();
  }
  if (currentView === 'dashboard') renderDashboard();
  if (currentView === 'analytics') renderAnalytics();
  if (currentView === 'add-student') openAddForm();
}

function showView(name) {
  const el = document.getElementById(`view-${name}`);
  if (el) el.classList.add('active');
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function renderDashboard() {
  const counts = {};
  STATUSES.forEach(s => { counts[s] = 0; });
  students.forEach(s => { if (counts[s.status] !== undefined) counts[s.status]++; });

  document.getElementById('stat-total').textContent    = students.length;
  document.getElementById('stat-success').textContent  = counts['Successful'];
  document.getElementById('stat-followup').textContent = counts['Follow Up'];
  document.getElementById('stat-rejected').textContent = counts['Rejected'];

  const pct = (k) => students.length ? Math.round(counts[k]/students.length*100) : 0;
  document.getElementById('trend-success').textContent  = pct('Successful') + '% of total';
  document.getElementById('trend-followup').textContent = pct('Follow Up')  + '% of total';
  document.getElementById('trend-rejected').textContent = pct('Rejected')   + '% of total';

  // Pipeline bars
  const max = Math.max(...Object.values(counts), 1);
  STATUSES.forEach(s => {
    const key = s.toLowerCase().replace(/ /g,'');
    const mapKey = { querygenerated:'query', underreview:'review', followup:'followup', successful:'success', rejected:'rejected' }[key] || key;
    const bar = document.getElementById(`bar-${mapKey}`);
    const cnt = document.getElementById(`cnt-${mapKey}`);
    if (bar) bar.style.width = (counts[s]/max*100) + '%';
    if (cnt) cnt.textContent = counts[s];
  });

  // Recent students (last 7)
  const recent = [...students].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0,7);
  const tbody = document.getElementById('recent-tbody');
  tbody.innerHTML = recent.map(s => `
    <tr onclick="openStudentModal(${s.id})">
      <td>${s.name}</td>
      <td style="font-size:11.5px; color:var(--text-muted)">${s.college}</td>
      <td>${statusBadgeHTML(s.status)}</td>
    </tr>`).join('');

  // Fee stats
  const fees = students.map(s => s.admissionFee);
  const total = fees.reduce((a,b) => a+b, 0);
  document.getElementById('fee-total').textContent = formatFee(total);
  document.getElementById('fee-avg').textContent   = formatFee(Math.round(total/students.length));
  document.getElementById('fee-max').textContent   = formatFee(Math.max(...fees));
  document.getElementById('fee-min').textContent   = formatFee(Math.min(...fees));

  // Nav badges
  document.getElementById('total-badge').textContent   = students.length;
  document.getElementById('followup-badge').textContent = counts['Follow Up'];
  document.getElementById('review-badge').textContent   = counts['Under Review'];
  document.getElementById('success-badge').textContent  = counts['Successful'];
  document.getElementById('rejected-badge').textContent = counts['Rejected'];
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function getFiltered() {
  return students.filter(s => {
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || s.name.toLowerCase().includes(q) ||
      s.studentId.toLowerCase().includes(q) || s.college.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) || s.course.toLowerCase().includes(q);
    const matchStatus  = !filterStatus  || s.status  === filterStatus;
    const matchCollege = !filterCollege || s.college === filterCollege;
    return matchSearch && matchStatus && matchCollege;
  });
}

function getSorted(arr) {
  return [...arr].sort((a,b) => {
    let va = a[sortCol], vb = b[sortCol];
    if (sortCol === 'admissionFee') { va = Number(va); vb = Number(vb); }
    else if (sortCol === 'date') { va = new Date(va); vb = new Date(vb); }
    else { va = String(va).toLowerCase(); vb = String(vb).toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });
}

function renderTable() {
  const filtered = getSorted(getFiltered());
  const total    = filtered.length;
  const start    = (currentPage - 1) * PAGE_SIZE;
  const page     = filtered.slice(start, start + PAGE_SIZE);

  document.getElementById('result-count').textContent = `${total} student${total !== 1 ? 's' : ''}`;

  const tbody = document.getElementById('student-tbody');
  if (!page.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fa-solid fa-users-slash"></i><p>No students found. Try adjusting filters.</p></div></td></tr>`;
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  tbody.innerHTML = page.map(s => {
    const cfg = STATUS_CONFIG[s.status] || STATUS_CONFIG["Query Generated"];
    return `
    <tr onclick="openStudentModal(${s.id})">
      <td onclick="event.stopPropagation()"><input type="checkbox" class="row-check" data-id="${s.id}"/></td>
      <td class="col-name">${s.name}</td>
      <td class="col-id">${s.studentId}</td>
      <td class="col-fee">${formatFee(s.admissionFee)}</td>
      <td onclick="event.stopPropagation()">
        <div class="status-badge ${cfg.cls}">
          <i class="fa-solid ${cfg.icon}"></i>
          <select class="status-select" data-id="${s.id}" style="color:inherit;background:transparent;border:none;outline:none;font-family:var(--font-body);font-size:11.5px;font-weight:600;cursor:pointer;"
            onchange="changeStatus(${s.id}, this.value)">
            ${STATUSES.map(st => `<option value="${st}"${s.status===st?' selected':''}>${st}</option>`).join('')}
          </select>
        </div>
      </td>
      <td>${formatDate(s.date)}</td>
      <td>${s.college}</td>
      <td onclick="event.stopPropagation()">
        <div class="action-btns">
          <button class="act-btn edit" title="Edit" onclick="openEditForm(${s.id})"><i class="fa-solid fa-pen"></i></button>
          <button class="act-btn delete" title="Delete" onclick="deleteStudent(${s.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>`;
  }).join('');

  renderPagination(total);
  updateSortHeaders();
}

function renderPagination(total) {
  const pages = Math.ceil(total / PAGE_SIZE);
  const pg = document.getElementById('pagination');
  if (pages <= 1) { pg.innerHTML = ''; return; }

  let html = `<button class="pg-btn" onclick="goPage(${currentPage-1})" ${currentPage===1?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;

  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 2 && i < pages - 1 && Math.abs(i - currentPage) > 1) {
      if (i === 3 || i === pages - 2) html += `<span class="pg-btn" style="pointer-events:none;opacity:0.4">…</span>`;
      continue;
    }
    html += `<button class="pg-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="pg-btn" onclick="goPage(${currentPage+1})" ${currentPage===pages?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>`;
  pg.innerHTML = html;
}

function goPage(n) {
  const total = getFiltered().length;
  const pages = Math.ceil(total / PAGE_SIZE);
  if (n < 1 || n > pages) return;
  currentPage = n;
  renderTable();
}

function updateSortHeaders() {
  document.querySelectorAll('.data-table th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    const icon = th.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-sort';
    if (th.dataset.col === sortCol) {
      th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
      if (icon) icon.className = `fa-solid fa-sort-${sortDir === 'asc' ? 'up' : 'down'}`;
    }
  });
}

function populateCollegeFilter() {
  const sel = document.getElementById('filter-college');
  const colleges = [...new Set(students.map(s => s.college))].sort();
  sel.innerHTML = `<option value="">All Colleges</option>` +
    colleges.map(c => `<option value="${c}">${c}</option>`).join('');
}

// ─── CRUD ─────────────────────────────────────────────────────────────────────
function changeStatus(id, newStatus) {
  const s = students.find(s => s.id === id);
  if (!s) return;
  s.status = newStatus;
  saveToStorage();
  renderDashboard();
  renderTable();
  showToast(`Status updated to "${newStatus}"`, 'success');
}

function deleteStudent(id) {
  if (!confirm('Are you sure you want to delete this student? This action cannot be undone.')) return;
  students = students.filter(s => s.id !== id);
  saveToStorage();
  renderDashboard();
  renderTable();
  populateCollegeFilter();
  showToast('Student deleted successfully', 'success');
  closeModal();
}

function openAddForm() {
  editingId = null;
  document.getElementById('form-title').textContent = 'Add New Student';
  clearForm();
  // Set today as default date
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('f-date').value = today;
  document.getElementById('form-error').textContent = '';
  navigateToViewEl('add-student');
}

function openEditForm(id) {
  const s = students.find(s => s.id === id);
  if (!s) return;
  editingId = id;
  document.getElementById('form-title').textContent = 'Edit Student';
  document.getElementById('f-name').value    = s.name;
  document.getElementById('f-id').value      = s.studentId;
  document.getElementById('f-email').value   = s.email || '';
  document.getElementById('f-phone').value   = s.phone || '';
  document.getElementById('f-college').value = s.college;
  document.getElementById('f-course').value  = s.course || '';
  document.getElementById('f-fee').value     = s.admissionFee;
  document.getElementById('f-date').value    = s.date;
  document.getElementById('f-status').value  = s.status;
  document.getElementById('f-city').value    = s.city || '';
  document.getElementById('f-notes').value   = s.notes || '';
  document.getElementById('form-error').textContent = '';
  closeModal();
  navigateTo('add-student');
}

function clearForm() {
  ['f-name','f-id','f-email','f-phone','f-college','f-course','f-fee','f-date','f-city','f-notes'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('f-status').value = 'Query Generated';
}

function saveStudent() {
  const name    = document.getElementById('f-name').value.trim();
  const sid     = document.getElementById('f-id').value.trim();
  const college = document.getElementById('f-college').value.trim();
  const fee     = document.getElementById('f-fee').value.trim();
  const date    = document.getElementById('f-date').value;
  const errEl   = document.getElementById('form-error');

  if (!name)    { errEl.textContent = 'Full name is required.'; return; }
  if (!sid)     { errEl.textContent = 'Student ID is required.'; return; }
  if (!college) { errEl.textContent = 'College is required.'; return; }
  if (!fee || isNaN(fee) || Number(fee) < 0) { errEl.textContent = 'Enter a valid admission fee.'; return; }
  if (!date)    { errEl.textContent = 'Admission date is required.'; return; }

  // Duplicate ID check
  const dupId = students.find(s => s.studentId === sid && s.id !== editingId);
  if (dupId) { errEl.textContent = 'Student ID already exists.'; return; }

  errEl.textContent = '';

  if (editingId) {
    const s = students.find(s => s.id === editingId);
    Object.assign(s, {
      name, studentId: sid, college,
      admissionFee: Number(fee), date,
      email:   document.getElementById('f-email').value.trim(),
      phone:   document.getElementById('f-phone').value.trim(),
      course:  document.getElementById('f-course').value.trim(),
      status:  document.getElementById('f-status').value,
      city:    document.getElementById('f-city').value.trim(),
      notes:   document.getElementById('f-notes').value.trim(),
    });
    showToast('Student updated successfully', 'success');
  } else {
    const newId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
    students.push({
      id: newId, name, studentId: sid, college,
      admissionFee: Number(fee), date,
      email:   document.getElementById('f-email').value.trim(),
      phone:   document.getElementById('f-phone').value.trim(),
      course:  document.getElementById('f-course').value.trim(),
      status:  document.getElementById('f-status').value,
      city:    document.getElementById('f-city').value.trim(),
      notes:   document.getElementById('f-notes').value.trim(),
    });
    showToast('Student added successfully', 'success');
  }

  saveToStorage();
  populateCollegeFilter();
  editingId = null;
  navigateTo('students');
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openStudentModal(id) {
  const s = students.find(s => s.id === id);
  if (!s) return;
  document.getElementById('modal-avatar').textContent = initials(s.name);
  document.getElementById('modal-name').textContent   = s.name;
  document.getElementById('modal-id-badge').textContent = s.studentId;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-detail-grid">
      <div class="detail-item">
        <span class="detail-label">Status</span>
        <span class="detail-value">${statusBadgeHTML(s.status)}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Admission Fee</span>
        <span class="detail-value" style="color:var(--green)">${formatFee(s.admissionFee)}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">College</span>
        <span class="detail-value">${s.college}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Course</span>
        <span class="detail-value">${s.course || '—'}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Email</span>
        <span class="detail-value" style="font-size:13px">${s.email || '—'}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Phone</span>
        <span class="detail-value">${s.phone || '—'}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">City</span>
        <span class="detail-value">${s.city || '—'}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Admission Date</span>
        <span class="detail-value">${formatDate(s.date)}</span>
      </div>
      ${s.notes ? `<div class="detail-item" style="grid-column:1/-1">
        <span class="detail-label">Notes</span>
        <span class="detail-value" style="font-size:13px;color:var(--text-secondary)">${s.notes}</span>
      </div>` : ''}
    </div>`;

  document.getElementById('modal-edit-btn').onclick   = () => openEditForm(id);
  document.getElementById('modal-delete-btn').onclick = () => deleteStudent(id);
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ─── ANALYTICS ────────────────────────────────────────────────────────────────
function renderAnalytics() {
  // College breakdown
  const collegeCounts = {};
  students.forEach(s => { collegeCounts[s.college] = (collegeCounts[s.college] || 0) + 1; });
  const sortedColleges = Object.entries(collegeCounts).sort((a,b) => b[1]-a[1]);
  const maxC = sortedColleges[0]?.[1] || 1;
  document.getElementById('college-breakdown').innerHTML = sortedColleges.map(([name, count]) => `
    <div class="college-row">
      <span class="college-name">${name}</span>
      <div class="college-bar-wrap"><div class="college-bar" style="width:${count/maxC*100}%"></div></div>
      <span class="college-count">${count}</span>
    </div>`).join('');

  // Status distribution
  const statusCounts = {};
  STATUSES.forEach(s => statusCounts[s] = 0);
  students.forEach(s => { if(statusCounts[s.status]!==undefined) statusCounts[s.status]++; });
  const statusColors = { "Query Generated":"#6c8bef","Under Review":"#4da6ff","Follow Up":"#f0a830","Successful":"#34c780","Rejected":"#f05252" };
  const total = students.length || 1;
  document.getElementById('status-dist').innerHTML = `<div class="status-dist-list">` +
    STATUSES.map(s => `
      <div class="sd-item">
        <div class="sd-color" style="background:${statusColors[s]}"></div>
        <span class="sd-label">${s}</span>
        <span class="sd-pct">${statusCounts[s]} <span style="color:var(--text-muted);font-size:11px">(${Math.round(statusCounts[s]/total*100)}%)</span></span>
      </div>`).join('') + `</div>`;

  // Monthly admissions
  const monthCounts = {};
  students.forEach(s => {
    if (!s.date) return;
    const key = s.date.slice(0,7); // YYYY-MM
    monthCounts[key] = (monthCounts[key]||0)+1;
  });
  const sortedMonths = Object.entries(monthCounts).sort((a,b) => a[0].localeCompare(b[0])).slice(-12);
  const maxM = Math.max(...sortedMonths.map(m=>m[1]), 1);
  document.getElementById('monthly-admissions').innerHTML = `<div class="monthly-list">` +
    sortedMonths.map(([key, count]) => {
      const dt = new Date(key+'-01');
      const label = dt.toLocaleDateString('en-IN', { month:'short', year:'2-digit' });
      return `<div class="month-row">
        <span class="month-name">${label}</span>
        <div class="month-bar-wrap"><div class="month-bar" style="width:${count/maxM*100}%"></div></div>
        <span class="month-count">${count}</span>
      </div>`;
    }).join('') + `</div>`;
}

// ─── EXPORT CSV ───────────────────────────────────────────────────────────────
function exportCSV() {
  const data = getSorted(getFiltered());
  const headers = ['Name','Student ID','Email','Phone','College','Course','City','Admission Fee','Status','Date'];
  const rows = data.map(s => [
    `"${s.name}"`, s.studentId, s.email, s.phone, `"${s.college}"`, s.course, s.city,
    s.admissionFee, s.status, s.date
  ].join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'EduCRM_Students.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exported successfully', 'success');
}

// ─── INTERNAL NAV HELPER ──────────────────────────────────────────────────────
function navigateToViewEl(view) {
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(`view-${view}`);
  if (el) el.classList.add('active');
}

// ─── EVENT LISTENERS ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Sidebar nav
  document.querySelectorAll('.nav-item[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.view);
      // close sidebar on mobile
      if (window.innerWidth <= 860) document.getElementById('sidebar').classList.remove('open');
    });
  });

  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Dashboard stat cards → navigate
  document.querySelectorAll('.stat-card[data-view-target]').forEach(card => {
    card.addEventListener('click', () => navigateTo(card.dataset.viewTarget));
  });

  // Dashboard btn-link
  document.querySelectorAll('.btn-link[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });

  // Global search (topbar)
  document.getElementById('global-search').addEventListener('input', e => {
    searchQuery = e.target.value;
    if (currentView !== 'students') navigateTo('students');
    else { currentPage = 1; renderTable(); }
  });

  // Table search
  document.getElementById('table-search').addEventListener('input', e => {
    searchQuery = e.target.value;
    currentPage = 1;
    renderTable();
  });

  // Status filter
  document.getElementById('filter-status').addEventListener('change', e => {
    filterStatus = e.target.value;
    currentPage = 1;
    renderTable();
  });

  // College filter
  document.getElementById('filter-college').addEventListener('change', e => {
    filterCollege = e.target.value;
    currentPage = 1;
    renderTable();
  });

  // Clear filters
  document.getElementById('clear-filters').addEventListener('click', () => {
    filterStatus = ''; filterCollege = ''; searchQuery = '';
    viewFilter = '';
    document.getElementById('filter-status').value  = '';
    document.getElementById('filter-college').value = '';
    document.getElementById('table-search').value   = '';
    document.getElementById('global-search').value  = '';
    currentPage = 1;
    renderTable();
    showToast('Filters cleared', 'info');
  });

  // Sort headers
  document.querySelectorAll('.data-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      if (sortCol === th.dataset.col) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortCol = th.dataset.col;
        sortDir = 'asc';
      }
      renderTable();
    });
  });

  // Select all checkbox
  document.getElementById('select-all').addEventListener('change', e => {
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = e.target.checked);
  });

  // Add student button
  document.getElementById('open-add-btn').addEventListener('click', openAddForm);

  // Export
  document.getElementById('export-btn').addEventListener('click', exportCSV);

  // Save student form
  document.getElementById('save-student').addEventListener('click', saveStudent);

  // Cancel form
  document.getElementById('cancel-form').addEventListener('click', () => {
    editingId = null;
    navigateTo('students');
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Init
  populateCollegeFilter();
  renderDashboard();
  navigateTo('dashboard');
});
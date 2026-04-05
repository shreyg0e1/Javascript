// astro.js - Interactive Astrology Website JavaScript

// Zodiac sign data with comprehensive information
const zodiacData = {
    'aries': {
        name: 'Aries',
        dates: 'March 21 - April 19',
        element: 'Fire',
        planet: 'Mars',
        symbol: '♈',
        color: '#FF6B35',
        traits: ['Energetic', 'Confident', 'Adventurous', 'Independent'],
        strengths: ['Leadership', 'Courage', 'Determination', 'Optimism'],
        challenges: ['Impatience', 'Impulsiveness', 'Quick temper'],
        compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius']
    },
    'taurus': {
        name: 'Taurus',
        dates: 'April 20 - May 20',
        element: 'Earth',
        planet: 'Venus',
        symbol: '♉',
        color: '#8FBC8F',
        traits: ['Reliable', 'Patient', 'Practical', 'Devoted'],
        strengths: ['Stability', 'Loyalty', 'Generosity', 'Persistence'],
        challenges: ['Stubbornness', 'Materialism', 'Resistance to change'],
        compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces']
    },
    'gemini': {
        name: 'Gemini',
        dates: 'May 21 - June 20',
        element: 'Air',
        planet: 'Mercury',
        symbol: '♊',
        color: '#FFD700',
        traits: ['Curious', 'Adaptable', 'Communicative', 'Witty'],
        strengths: ['Intelligence', 'Versatility', 'Enthusiasm', 'Social skills'],
        challenges: ['Inconsistency', 'Superficiality', 'Restlessness'],
        compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo']
    },
    'cancer': {
        name: 'Cancer',
        dates: 'June 21 - July 22',
        element: 'Water',
        planet: 'Moon',
        symbol: '♋',
        color: '#98FB98',
        traits: ['Emotional', 'Intuitive', 'Protective', 'Nurturing'],
        strengths: ['Empathy', 'Imagination', 'Loyalty', 'Compassion'],
        challenges: ['Moodiness', 'Oversensitivity', 'Clinginess'],
        compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo']
    },
    'leo': {
        name: 'Leo',
        dates: 'July 23 - August 22',
        element: 'Fire',
        planet: 'Sun',
        symbol: '♌',
        color: '#FFA500',
        traits: ['Confident', 'Generous', 'Creative', 'Dramatic'],
        strengths: ['Leadership', 'Charisma', 'Warmth', 'Humor'],
        challenges: ['Arrogance', 'Stubbornness', 'Self-centeredness'],
        compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra']
    },
    'virgo': {
        name: 'Virgo',
        dates: 'August 23 - September 22',
        element: 'Earth',
        planet: 'Mercury',
        symbol: '♍',
        color: '#9370DB',
        traits: ['Analytical', 'Hardworking', 'Practical', 'Loyal'],
        strengths: ['Attention to detail', 'Reliability', 'Modesty', 'Intelligence'],
        challenges: ['Perfectionism', 'Worry', 'Criticism'],
        compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio']
    },
    'libra': {
        name: 'Libra',
        dates: 'September 23 - October 22',
        element: 'Air',
        planet: 'Venus',
        symbol: '♎',
        color: '#FF69B4',
        traits: ['Diplomatic', 'Balanced', 'Social', 'Peaceful'],
        strengths: ['Fairness', 'Cooperation', 'Charm', 'Idealism'],
        challenges: ['Indecisiveness', 'Superficiality', 'Avoidance of confrontation'],
        compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius']
    },
    'scorpio': {
        name: 'Scorpio',
        dates: 'October 23 - November 21',
        element: 'Water',
        planet: 'Pluto',
        symbol: '♏',
        color: '#8B0000',
        traits: ['Intense', 'Mysterious', 'Determined', 'Passionate'],
        strengths: ['Resourcefulness', 'Bravery', 'Passion', 'Stubbornness'],
        challenges: ['Jealousy', 'Secrecy', 'Resentment'],
        compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn']
    },
    'sagittarius': {
        name: 'Sagittarius',
        dates: 'November 22 - December 21',
        element: 'Fire',
        planet: 'Jupiter',
        symbol: '♐',
        color: '#4169E1',
        traits: ['Adventurous', 'Optimistic', 'Philosophical', 'Freedom-loving'],
        strengths: ['Generosity', 'Idealism', 'Humor', 'Honesty'],
        challenges: ['Impatience', 'Tactlessness', 'Restlessness'],
        compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius']
    },
    'capricorn': {
        name: 'Capricorn',
        dates: 'December 22 - January 19',
        element: 'Earth',
        planet: 'Saturn',
        symbol: '♑',
        color: '#2F4F4F',
        traits: ['Ambitious', 'Disciplined', 'Practical', 'Responsible'],
        strengths: ['Responsibility', 'Discipline', 'Self-control', 'Management'],
        challenges: ['Pessimism', 'Fatalism', 'Stubbornness'],
        compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces']
    },
    'aquarius': {
        name: 'Aquarius',
        dates: 'January 20 - February 18',
        element: 'Air',
        planet: 'Uranus',
        symbol: '♒',
        color: '#00CED1',
        traits: ['Independent', 'Humanitarian', 'Original', 'Progressive'],
        strengths: ['Originality', 'Independence', 'Humanitarianism', 'Intelligence'],
        challenges: ['Emotional expression', 'Temperamental', 'Uncompromising'],
        compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius']
    },
    'pisces': {
        name: 'Pisces',
        dates: 'February 19 - March 20',
        element: 'Water',
        planet: 'Neptune',
        symbol: '♓',
        color: '#9400D3',
        traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
        strengths: ['Compassion', 'Artistic', 'Intuition', 'Gentle'],
        challenges: ['Fearfulness', 'Overly trusting', 'Escapism'],
        compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn']
    }
};

// Daily horoscope insights
const dailyInsights = {
    'aries': [
        "Today's energy favors bold decisions and new beginnings. Trust your instincts!",
        "Your leadership qualities shine today. Take charge of important situations.",
        "Adventure calls to you. Embrace new experiences with confidence.",
        "Your competitive spirit drives success. Channel it positively."
    ],
    'taurus': [
        "Focus on stability and comfort today. Your patience will be rewarded.",
        "Financial opportunities may present themselves. Stay practical.",
        "Your determination leads to lasting achievements. Keep pushing forward.",
        "Beauty and harmony surround you. Appreciate life's simple pleasures."
    ],
    'gemini': [
        "Communication is key today. Express your ideas clearly and confidently.",
        "Your curiosity opens new doors. Ask questions and learn something new.",
        "Networking brings unexpected opportunities. Connect with others.",
        "Versatility is your strength. Adapt to changing circumstances gracefully."
    ],
    'cancer': [
        "Trust your intuition today. Your emotional intelligence guides you well.",
        "Family and home matters need attention. Nurture your relationships.",
        "Your caring nature helps others. Show compassion and understanding.",
        "Memories and past experiences offer valuable insights."
    ],
    'leo': [
        "Your charisma attracts positive attention. Shine bright today!",
        "Creative projects flourish under your touch. Express yourself boldly.",
        "Leadership opportunities arise. Step into your power confidently.",
        "Your generous spirit brings joy to others. Share your warmth."
    ],
    'virgo': [
        "Attention to detail serves you well. Perfect your craft today.",
        "Organization and planning lead to success. Structure your day wisely.",
        "Your practical wisdom helps solve complex problems.",
        "Health and wellness deserve focus. Take care of your body and mind."
    ],
    'libra': [
        "Balance is essential today. Find harmony in all areas of life.",
        "Your diplomatic skills resolve conflicts. Mediate with grace.",
        "Beauty and art inspire you. Surround yourself with lovely things.",
        "Partnership and cooperation bring mutual benefits."
    ],
    'scorpio': [
        "Your intensity attracts powerful transformations. Embrace change.",
        "Hidden truths may be revealed. Trust your investigative instincts.",
        "Passionate pursuits bring deep satisfaction. Follow your heart.",
        "Your magnetic personality draws others to you."
    ],
    'sagittarius': [
        "Adventure awaits! Your optimism opens exciting new paths.",
        "Learning and teaching bring fulfillment. Share your wisdom.",
        "Your philosophical nature helps others see the bigger picture.",
        "Freedom and independence are essential to your happiness today."
    ],
    'capricorn': [
        "Your disciplined approach yields impressive results. Stay focused.",
        "Career advancement is possible. Your hard work pays off.",
        "Practical decisions lead to long-term success. Think strategically.",
        "Your responsible nature earns respect and recognition."
    ],
    'aquarius': [
        "Innovation and originality set you apart. Think outside the box.",
        "Humanitarian efforts bring deep satisfaction. Help others.",
        "Your unique perspective offers valuable solutions to problems.",
        "Friendships and social connections energize you today."
    ],
    'pisces': [
        "Your intuitive gifts are heightened. Trust your inner voice.",
        "Creative expression flows naturally. Let your imagination soar.",
        "Compassion and empathy guide your interactions with others.",
        "Spiritual insights bring peace and understanding."
    ]
};

// Month name to number mapping
const monthMap = {
    'january': 1, 'jan': 1,
    'february': 2, 'feb': 2,
    'march': 3, 'mar': 3,
    'april': 4, 'apr': 4,
    'may': 5,
    'june': 6, 'jun': 6,
    'july': 7, 'jul': 7,
    'august': 8, 'aug': 8,
    'september': 9, 'sep': 9, 'sept': 9,
    'october': 10, 'oct': 10,
    'november': 11, 'nov': 11,
    'december': 12, 'dec': 12
};

// Sound effects for interactions
const playSound = (frequency, duration = 200) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // This line creates an audio environment in your browser — like setting up a music studio 🎧.
    // AudioContext is a built-in Web API that lets you create and control sounds.
    // // It ensures compatibility with older browsers too (hence the || window.webkitAudioContext).
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
};

// Function to determine zodiac sign
function getZodiacSign(day, month) {
    const zodiacRanges = [
        { sign: 'capricorn', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
        { sign: 'aquarius', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
        { sign: 'pisces', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
        { sign: 'aries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
        { sign: 'taurus', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
        { sign: 'gemini', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
        { sign: 'cancer', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
        { sign: 'leo', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
        { sign: 'virgo', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
        { sign: 'libra', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
        { sign: 'scorpio', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
        { sign: 'sagittarius', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
    ];

    for (const range of zodiacRanges) {
        if (range.sign === 'capricorn') {
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                return range.sign;
            }
        } else {
            if ((month === range.start.month && day >= range.start.day) || 
                (month === range.end.month && day <= range.end.day)) {
                return range.sign;
            }
        }
    }
    return 'aries'; // Default fallback
}

// Create mystical particle effects
function createMysticalParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'mystical-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: radial-gradient(circle, #ffd700, #ffeb3b, #fff176);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(255, 215, 0, 0.8);
        `;
        particleContainer.appendChild(particle);
    }
    
    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove particles after animation
    setTimeout(() => {
        particleContainer.remove();
    }, 5000);
}

// Create zodiac constellation effect
function createConstellationEffect(zodiacSign) {
    const constellation = document.createElement('div');
    constellation.className = 'constellation-effect';
    constellation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        pointer-events: none;
        z-index: 1001;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    `;
    
    // Add constellation stars
    const starPositions = [
        { x: 50, y: 20 }, { x: 80, y: 30 }, { x: 70, y: 60 },
        { x: 30, y: 40 }, { x: 90, y: 70 }, { x: 20, y: 80 },
        { x: 60, y: 90 }, { x: 40, y: 70 }, { x: 85, y: 50 }
    ];
    
    starPositions.forEach((pos, index) => {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            left: ${pos.x}%;
            top: ${pos.y}%;
            width: 4px;
            height: 4px;
            background: ${zodiacData[zodiacSign].color};
            border-radius: 50%;
            box-shadow: 0 0 15px ${zodiacData[zodiacSign].color};
            animation: starPulse 2s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
        `;
        constellation.appendChild(star);
    });
    
    document.body.appendChild(constellation);
    
    // Fade in constellation
    setTimeout(() => {
        constellation.style.opacity = '1';
    }, 100);
    
    // Remove constellation after display
    setTimeout(() => {
        constellation.style.opacity = '0';
        setTimeout(() => constellation.remove(), 1000);
    }, 4000);
}

// Create results modal
function createResultsModal(firstName, surname, zodiacSign, insights) {
    const modal = document.createElement('div');
    modal.className = 'results-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.35), rgba(255, 69, 0, 0.25));
        padding: 40px;
        border-radius: 25px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 3px solid ${zodiacData[zodiacSign].color};
        box-shadow: 0 0 50px ${zodiacData[zodiacSign].color}40;
        animation: modalSlideIn 0.5s ease-out;
        color: white;
        text-align: center;
        position: relative;
    `;
    
    const zodiac = zodiacData[zodiacSign];
    const randomInsight = insights[Math.floor(Math.random() * insights.length)];
    
    modalContent.innerHTML = `
        <button class="close-btn" style="
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
        ">×</button>
        
        <div class="zodiac-symbol" style="
            font-size: 4rem;
            color: ${zodiac.color};
            margin-bottom: 20px;
            text-shadow: 0 0 20px ${zodiac.color};
            animation: symbolPulse 2s ease-in-out infinite;
        ">${zodiac.symbol}</div>
        
        <h2 style="
            font-size: 2.5rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, ${zodiac.color}, #ffd700);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        ">Welcome, ${firstName} ${surname}!</h2>
        
        <h3 style="
            font-size: 2rem;
            margin-bottom: 20px;
            color: ${zodiac.color};
            text-shadow: 0 0 10px ${zodiac.color}40;
        ">You are a ${zodiac.name}</h3>
        
        <div class="zodiac-dates" style="
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: #ccc;
        ">${zodiac.dates}</div>
        
        <div class="zodiac-info" style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        ">
            <div class="info-card" style="
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 15px;
                border: 2px solid ${zodiac.color}40;
            ">
                <h4 style="color: ${zodiac.color}; margin-bottom: 10px;">Element</h4>
                <p style="font-size: 1.1rem;">${zodiac.element}</p>
            </div>
            <div class="info-card" style="
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 15px;
                border: 2px solid ${zodiac.color}40;
            ">
                <h4 style="color: ${zodiac.color}; margin-bottom: 10px;">Ruling Planet</h4>
                <p style="font-size: 1.1rem;">${zodiac.planet}</p>
            </div>
        </div>
        
        <div class="personality-traits" style="margin-bottom: 30px;">
            <h4 style="color: ${zodiac.color}; margin-bottom: 15px; font-size: 1.3rem;">Your Personality Traits</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                ${zodiac.traits.map(trait => `
                    <span style="
                        background: ${zodiac.color}40;
                        padding: 8px 15px;
                        border-radius: 20px;
                        border: 1px solid ${zodiac.color};
                        font-size: 0.9rem;
                    ">${trait}</span>
                `).join('')}
            </div>
        </div>
        
        <div class="daily-insight" style="
            background: rgba(255, 255, 255, 0.1);
            padding: 25px;
            border-radius: 15px;
            border: 2px solid ${zodiac.color}40;
            margin-bottom: 30px;
        ">
            <h4 style="color: ${zodiac.color}; margin-bottom: 15px; font-size: 1.3rem;">Your Daily Insight</h4>
            <p style="font-size: 1.1rem; line-height: 1.6; font-style: italic;">"${randomInsight}"</p>
        </div>
        
        <div class="compatibility" style="margin-bottom: 30px;">
            <h4 style="color: ${zodiac.color}; margin-bottom: 15px; font-size: 1.3rem;">Best Compatibility</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                ${zodiac.compatibility.map(sign => `
                    <span style="
                        background: linear-gradient(45deg, ${zodiac.color}40, ${zodiac.color}20);
                        padding: 8px 15px;
                        border-radius: 20px;
                        border: 1px solid ${zodiac.color};
                        font-size: 0.9rem;
                    ">${sign}</span>
                `).join('')}
            </div>
        </div>
        
        <button class="new-reading-btn" style="
            background: linear-gradient(45deg, ${zodiac.color}, #ffd700);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 20px ${zodiac.color}40;
        ">Get New Reading</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add modal animations
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        @keyframes modalSlideIn {
            from { transform: scale(0.7) translateY(-50px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes symbolPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes starPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.3); }
        }
        .close-btn:hover { background: rgba(255, 255, 255, 0.2); transform: scale(1.1); }
        .new-reading-btn:hover { transform: translateY(-3px); box-shadow: 0 5px 25px ${zodiac.color}60; }
    `;
    document.head.appendChild(modalStyles);
    
    // Show modal
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 100);
    
    // Close modal functionality
    const closeBtn = modalContent.querySelector('.close-btn');
    const newReadingBtn = modalContent.querySelector('.new-reading-btn');
    
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            modalStyles.remove();
        }, 500);
    };
    
    closeBtn.addEventListener('click', closeModal);
    newReadingBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Add interactive effects to characters
function addCharacterInteractions() {
    const characters = document.querySelectorAll('.pandit, .boy, .girl');
    
    characters.forEach(character => {
        character.addEventListener('click', () => {
            playSound(880, 300);
            character.style.animation = 'bounce 0.6s ease-in-out';
            setTimeout(() => {
                character.style.animation = '';
            }, 600);
        });
    });
    
    // Add bounce animation
    const bounceStyles = document.createElement('style');
    bounceStyles.textContent = `
        @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(1); }
            25% { transform: translateY(-10px) scale(1.05); }
            50% { transform: translateY(-20px) scale(1.1); }
            75% { transform: translateY(-10px) scale(1.05); }
        }
    `;
    document.head.appendChild(bounceStyles);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.astro-form');
    const inputs = form.querySelectorAll('input');
    
    // Add input focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            playSound(523, 100);
            input.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });
    
    // Add character interactions
    addCharacterInteractions();
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const firstName = inputs[0].value.trim();
        const surname = inputs[1].value.trim();
        const day = parseInt(inputs[2].value);
        const monthInput = inputs[3].value.trim().toLowerCase();
        const year = parseInt(inputs[4].value);
        
        // Validate inputs
        if (!firstName || !surname || !day || !monthInput || !year) {
            alert('Please fill in all fields!');
            return;
        }
        
        // Convert month to number
        const month = monthMap[monthInput];
        
        if (!month) {
            alert('Please enter a valid month (e.g., January, Jan, 1)!');
            return;
        }
        
        // Validate day and month combination
        const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day < 1 || day > daysInMonth[month - 1]) {
            alert('Please enter a valid day for the selected month!');
            return;
        }
        
        // Validate year
        if (year < 1900 || year > 2024) {
            alert('Please enter a valid year between 1900 and 2024!');
            return;
        }
        
        // Play success sound
        playSound(659, 300);
        
        // Create loading effect
        const submitBtn = form.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'CALCULATING...';
        submitBtn.disabled = true;
        
        // Add loading animation to submit button
        submitBtn.style.animation = 'pulse 1.5s ease-in-out infinite';
        
        // Create mystical particles
        createMysticalParticles();
        
        // Calculate zodiac sign
        const zodiacSign = getZodiacSign(day, month);
        const insights = dailyInsights[zodiacSign];
        
        // Simulate loading time for dramatic effect
        setTimeout(() => {
            // Create constellation effect
            createConstellationEffect(zodiacSign);
            
            // Play magical sound
            playSound(880, 500);
            
            // Show results modal after constellation effect
            setTimeout(() => {
                createResultsModal(firstName, surname, zodiacSign, insights);
                
                // Reset form
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.animation = '';
                
                // Play completion sound
                playSound(1047, 400);
            }, 2000);
        }, 2000);
    });
    
    // Add pulse animation for loading button
    const pulseStyles = document.createElement('style');
    pulseStyles.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(pulseStyles);
    
    // Add mystical ambient sounds on page load
    setTimeout(() => {
        playSound(220, 100);
        setTimeout(() => playSound(330, 100), 200);
        setTimeout(() => playSound(440, 100), 400);
    }, 1000);
    
    // Create floating zodiac symbols
    function createFloatingZodiacSymbols() {
        const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
        
        symbols.forEach((symbol, index) => {
            const floatingSymbol = document.createElement('div');
            floatingSymbol.style.cssText = `
                position: fixed;
                font-size: 2rem;
                color: rgba(255, 215, 0, 0.3);
                pointer-events: none;
                z-index: 0;
                animation: floatSymbol ${15 + Math.random() * 10}s linear infinite;
                animation-delay: ${index * 2}s;
                left: ${Math.random() * 100}%;
                top: 100%;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            `;
            floatingSymbol.textContent = symbol;
            document.body.appendChild(floatingSymbol);
        });
    }
    
    // Add floating symbol animation
    const floatingStyles = document.createElement('style');
    floatingStyles.textContent = `
        @keyframes floatSymbol {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatingStyles);
    
    // Start floating symbols
    createFloatingZodiacSymbols();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
            const inputs = Array.from(form.querySelectorAll('input'));
            const currentIndex = inputs.indexOf(document.activeElement);
            
            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            } else {
                form.querySelector('.submit-button').click();
            }
        }
    });
    
    // Add cosmic background effects
    function createCosmicBackground() {
        const cosmic = document.createElement('div');
        cosmic.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
            animation: cosmicShift 20s ease-in-out infinite;
        `;
        document.body.appendChild(cosmic);
    }
    
    // Add cosmic shift animation
    const cosmicStyles = document.createElement('style');
    cosmicStyles.textContent = `
        @keyframes cosmicShift {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            33% { opacity: 0.6; transform: scale(1.1); }
            66% { opacity: 0.4; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(cosmicStyles);
    
    // Initialize cosmic background
    createCosmicBackground();
    
    // Add mystical hover effects to form inputs
    inputs.forEach((input, index) => {
        input.addEventListener('mouseenter', () => {
            playSound(440 + (index * 50), 100);
            input.style.boxShadow = `0 0 25px rgba(255, 20, 147, 0.8)`;
        });
        
        input.addEventListener('mouseleave', () => {
            input.style.boxShadow = '';
        });
        
        // Add typing sound effects
        input.addEventListener('input', () => {
            playSound(880 + Math.random() * 200, 50);
        });
    });
    
    // Add mystical cursor trail
    let mouseX = 0;
    let mouseY = 0;
    let trailElements = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trail element
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            pointer-events: none;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.8), transparent);
            border-radius: 50%;
            z-index: 9999;
            left: ${mouseX}px;
            top: ${mouseY}px;
            animation: trailFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        trailElements.push(trail);
        
        // Remove old trail elements
        if (trailElements.length > 20) {
            const oldTrail = trailElements.shift();
            oldTrail.remove();
        }
    });
    
    // Add trail fade animation
    const trailStyles = document.createElement('style');
    trailStyles.textContent = `
        @keyframes trailFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.3); }
        }
    `;
    document.head.appendChild(trailStyles);
    
    // Add periodic mystical sounds
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 3 seconds
            playSound(220 + Math.random() * 400, 200);
        }
    }, 3000);
    
    // Add zen mode toggle (Easter egg)
    let zenMode = false;
    let zenClickCount = 0;
    
    document.querySelector('.main-title').addEventListener('click', () => {
        zenClickCount++;
        if (zenClickCount === 5) {
            zenMode = !zenMode;
            zenClickCount = 0;
            
            if (zenMode) {
                document.body.style.filter = 'sepia(20%) saturate(1.5) hue-rotate(15deg)';
                playSound(528, 1000); // Healing frequency
                
                // Add zen particles
                for (let i = 0; i < 50; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.style.cssText = `
                            position: fixed;
                            width: 8px;
                            height: 8px;
                            background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
                            border-radius: 50%;
                            left: ${Math.random() * window.innerWidth}px;
                            top: ${Math.random() * window.innerHeight}px;
                            animation: zenFloat 3s ease-out forwards;
                            pointer-events: none;
                            z-index: 1000;
                        `;
                        document.body.appendChild(particle);
                        
                        setTimeout(() => particle.remove(), 3000);
                    }, i * 100);
                }
            } else {
                document.body.style.filter = '';
            }
        }
    });
    
    // Add zen float animation
    const zenStyles = document.createElement('style');
    zenStyles.textContent = `
        @keyframes zenFloat {
            0% { opacity: 0; transform: translateY(0) scale(0.5); }
            50% { opacity: 1; transform: translateY(-30px) scale(1); }
            100% { opacity: 0; transform: translateY(-60px) scale(0.5); }
        }
    `;
    document.head.appendChild(zenStyles);
    
    console.log(' Spiritual Saints - Mystic Astrology Website Initialized ');
    console.log(' May the stars guide your path ');
});






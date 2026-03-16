const div=document.getElementById("root");
const timer=function(){
const time=new Date()
div.innerHTML=time.toLocaleTimeString();
}
setInterval(timer,1000);

// ===========STYLING================
div.style.backgroundColor="orange"
div.style.fontSize="100px"
div.style.display="flex"
div.style.justifyContent="center"
div.style.alignItems="center"
div.style.height="100vh"










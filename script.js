 
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var frontw = document.getElementById("front-projects");
var fulls=document.getElementById('full-projects')
var mobile=document.getElementById('android-projects')
var design=document.getElementById('graphics-projects')

function start(){
    fulls.style.display='none';
    mobile.style.display="none";
    design.style.display="none"
}
 
function front(){
   console.log('front called')
if (frontw.style.display === "block") {
frontw.style.display = "none";
} else {
frontw.style.display = "block";
}
fulls.style.display="none"
mobile.style.display="none"
design.style.display="none"
}
function full(){
   
if (fulls.style.display === "block") {
fulls.style.display = "none";
} else {
fulls.style.display = "block";
}
frontw.style.display="none"
mobile.style.display="none"
design.style.display="none"
}
function android(){

if (mobile.style.display === "block") {
mobile.style.display = "none";
} else {
mobile.style.display = "block";
}
fulls.style.display="none"
frontw.style.display="none"
design.style.display="none"
}
function graphics(){
    
if (design.style.display === "block") {
design.style.display = "none";
} else {
design.style.display = "block";
}
fulls.style.display="none"
frontw.style.display="none"
mobile.style.display="none"
}
 
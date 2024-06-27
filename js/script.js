 //index.html
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

 
 function consoleText(words, id, colors) {
 
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

function index_start(){
console.log('inside index_start')
  fulls.style.display ="none"
  mobile.style.display="none";
  design.style.display="none"
  

 }
 //end of index
// Add active class to the current button (highlight it)



 
 
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
 

//to hide index info

function info(){
  var text=document.getElementById('text')
  var console=document.getElementById('console')
  text.style.display="none"
  console.style.display="none"
}
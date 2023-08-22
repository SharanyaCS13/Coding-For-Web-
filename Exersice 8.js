const div1 = document.getElementById("div1");

function showDiv1() {
    div1.style.display = "block";    
}

function closeDiv1(){
    div1.style.display="none";
}
button1.addEventListener("click", showDiv1);
button3.addEventListener("click", closeDiv1);

const div2 = document.getElementById("div2");
const button2 = document.getElementById("button2");
const body = document.querySelector("body");


function showDiv2() {
    div2.style.display = "block";
    element.setAttribute("click", closeDiv2);
}
function closeDiv2(){
    div2.style.display="none";
}

button2.addEventListener("click", showDiv2());
button4.addEventListener("click", closeDiv2());
body.addEventListener("load", showDiv2());


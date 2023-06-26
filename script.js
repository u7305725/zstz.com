var text = "this is some text"; // in the feedback.html

var e = document.getElementById("mymessage"); 
// getElementByClassName()
var b = document.getElementById("jsbut1");
console.log(e); //print message

function fuc1(){
    if(e.style.display == "none"){
        e.style.display ="block";
        b.innerText = 'hide';
    }else{
        e.style.display = "none";
        b.innerText = 'show';
    }
}
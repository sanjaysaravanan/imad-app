console.log('Loaded!');
//change the text of the main.text div
var element = document.getElementById("main-text");
element.innerHTML = "new value";

//move the image
var element1 = document.getElementById("madi");
var marginleft = 0
function moveright(){
    marginleft = marginleft + 10;
    element1.style.marginleft = marginleft + 'px';
}

element1.onclick = function() {
    var interval = setInterval(moveright, 100);
};
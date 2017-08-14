console.log('Loaded!');
//change the text of the main.text div
var element = document.getElementById("main-text");
element.innerHTML = "new value";

//move the image
var element1 = document.getElementById("am");
element1.onclick = function() {
    element1.style.marginleft = '100px';
};
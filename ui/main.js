console.log('Loaded!');
//change the text of the main.text div
var element = document.getElementById("main-text");
element.innerHTML = "new value";

//move the image
var img = document.getElementByClassName("img-medium");
img.onclick = function(){
    img.style.marginright = '100px';
};
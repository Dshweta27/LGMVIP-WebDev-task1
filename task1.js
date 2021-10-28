var slideimg = document.getElementById("slideimg");

var images = new Array(
    "images/beach.jpg",
    "images/ocean.jpg",
    "images/sunset.jpg",
    "images/lake.jpg"
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideimg.src = images[i];
    i++;
    setTimeout('slider()',20000);
}

function myfunction(smallImg)
    {
        var fullImg = document.getElementById("imageBox");
        fullImg.src = smallImg.src;
    }
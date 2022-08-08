video="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=canvas.create(350,350);
    canvas.center();

}

function draw(){
image(video,0,0,350,350);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status: Detecting Objects";
}
 status="";
 function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
 }
noseX = 0;
noseY = 0


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
     console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("x=" + results[0].pose.nose.x-40);
        console.log("y=" + results[0].pose.nose.y);
    }
}
function draw(){
    image(video, 0,0, 300, 300);

}
function take_snapshot(){
    save('image.png');
}
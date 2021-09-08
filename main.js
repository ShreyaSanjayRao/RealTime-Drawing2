var NoseX =0;
var NoseY=0;
var LeftWristX =0;
var RightWristX =0;
var difference=0;
function setup(){
video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(650,550);
canvas.position(650,250);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
background("#4285F4");
fill("#0F13FF");
stroke("#FF013");
square(NoseX,NoseY,difference);
}
function preload(){

}

function modelLoaded(){
    console.log("poseNet is inisatilized");
}
function gotPoses(results){
    if(results .length > 0){
        console.log(results);
        NoseX= results[0].pose.nose.x;
        NoseY= results[0].pose.nose.y;
        console.log("NoseX "+NoseX);
        console.log("NoseY"+NoseY);
        LeftWristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
difference=floor(LeftWristX-RightWristX);
console.log("LeftWirstX "+LeftWristX);
console.log("RightWirstX "+RightWristX);
console.log("difference "+difference);
    }
}
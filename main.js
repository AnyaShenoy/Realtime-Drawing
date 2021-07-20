noseX= 0;
noseY= 0;
right_wrist_x=0; 
left_wrist_x=0;
wrist_gap= 0;
function preload(){

}

function setup(){
    video= createCapture(VIDEO)
    video.size(550,500)
    canvas= createCanvas(550,550)
    canvas.position(600, 100)
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("Model loaded")
}

function gotposes(results){
    if (results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("Nose X= "+noseX+", Nose Y= "+noseY)
        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x;
        wrist_gap= left_wrist_x-right_wrist_x;
    }
}

function draw(){
    background('#61c8ff');
    fill('#d90070');
    stroke('#350061')
    square(noseX, noseY, wrist_gap);
}
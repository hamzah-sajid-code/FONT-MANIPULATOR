// Globel Variables

var nameoftheperson = prompt('What is your good name:');
var wristRightx = '';
var wristRighty = '';
var wristLefty = '';
var wristLeftx = '';
var getSizex = '';
var compressed = '';
// P5.JS Funtions

function preload(){
    
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(600, 200);
    myCam = createCapture(VIDEO);
    myCam.size(550, 500)
    poseNet = ml5.poseNet(myCam, modelLoaded)
    poseNet.on('pose', gotTheValue)
}
function draw(){
    background('gray')
    textSize(compressed);
    text(nameoftheperson, 10, 300);
}

// P5.JS Funtions End

// My Functions 

// Model Loaded Function from consoling that PoseNet Model has successfully loaded
function modelLoaded(){
    console.log('Successfully Loaded PoseNet');
}

// Speak Function to speak person's name
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Your name is "+nameoftheperson;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}

// Got Value from PoseNet model function
function gotTheValue(results){
    if(results.length > 0){
        console.log(results);
        wristRightx = results[0].pose.rightWrist.x;
        wristRighty = results[0].pose.rightWrist.y;
        wristLefty = results[0].pose.leftWrist.y;
        wristLeftx = results[0].pose.leftWrist.x;
        getSizex = wristLeftx - wristRightx;
        compressed =  getSizex - 200;
        document.getElementById('heightandwidth').innerHTML = compressed.toFixed().replace('-','');
        document.getElementById('heightandwidth1').innerHTML = getSizex.toFixed();
    }
}

// My Functions End
speak();

function setup(){
    canvas = createCanvas(300, 300) ;
    canvas.center() ;
    video = createCapture(VIDEO) ;
    video.hide() ;
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cQAqo5igh/model.json',modelloaded)
}

function modelloaded(){
    console.log("Loaded") ;
}

function draw() {
    image(video, 0, 0, 300, 300) ;
    classifier.classify(video, gotResults) ;
}

function gotResults(error,results){
    if(error){
        console.error(error) ;
    }
    else{
        console.log(results) ;
        document.getElementById("object_name_display").innerHTML = results[0].label ;
        document.getElementById("accuracy_display").innerHTML = results[0].confidence.toFixed(3) ;
    }
} 
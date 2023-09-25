var SpeechRecognition = window.webkitSpeechRecognition ;
var recognition = new SpeechRecognition() ;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()

}

recognition.onresult = function(event) {
    console.log(event) ;

    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content ;
    if (content=="take my selfie") {
        speak()
    }
    
}



function speak() {

    var synth = window.speechSynthesis ;
    speech_data = "Taking your selfie in 5 seconds poo"
    var utter = new SpeechSynthesisUtterance(speech_data) ;
    synth.speak(utter)

    Webcam.attach("#camera")

    setTimeout(function(){
        take_snapshot() 
        confetti({
            particleCount:1000,
            spread:360,
            shapes:['star','circle','square']
            
        })
        save()
    },5000) ;

}

Webcam.set({
    width:410,
    height:250,
    image_format:'png',
    png_quality:100,

}) ;


function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '"/>' ;

    }) ;

}

function save() {
    link = document.getElementById("link") ;
    img = document.getElementById("selfie_img").src ;
    link.href=img ;
    link.click() ;
}
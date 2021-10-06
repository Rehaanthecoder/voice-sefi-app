var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  var Content = event.results[0][0].transcript;

  document.getElementById("textbox").innerHTML = Content;
  console.log(Content);
  if (Content == "take my selfie") {
    console.log("taking selfie --- ");
    speak();
  }
};

function speak() {
  var synthz = window.speechSynthesis;
  speak_data = document.getElementById("textbox").value;
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synthz.speak(utterthis);
  Webcam.attach(camara);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 100,
});

camara = document.getElementById("camara");

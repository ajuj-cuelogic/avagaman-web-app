
if((window.location.href).toLowerCase().indexOf("registration") > 0) {
var registeration_array = [
	['firstName'],
	['lastName'],
	['username'],
	['gender'],
];
recognition=new webkitSpeechRecognition;
recognition.continuous=!0;
recognition.interimResults=!0;
/*recognition.onresult=function(n){
	console.log(n.results);
	recognition.stop()
}
*/
var count = 0;
recognition.onresult = function(n) {
							var i="";
							o=0;
							$.each(n.results,function(n,t){
								if(t.isFinal && o<t[0].confidence)
									i=t[0].transcript;

							});
							i = $.trim(i);
							if(i.length!=0) {
								if(registeration_array[count][0] == "gender") {
									i = i.toLowerCase();
									if(i == "mail" || i == "gmail") i = "male";
								} else if(registeration_array[count][0] == "username") {
									i = i.replace(/\s/g,'');
									i = i.toLowerCase();
								}
								$('#registrationForm').find('.input-voice:eq('+count+')').val(i);
								stop();
							}
						};

$(document).ready(function(){
	nextField();
});

function nextField(){
	console.log("in nextfield ");
	speak(registeration_array[count][0]);
}

function stop(){

	recognition.stop();
	setTimeout(function(){if(++count<registeration_array.length){
		nextField();
	}}, 1000);
}


function speak(n) {
	su.text=n,speechSynthesis.speak(su)
}
var su = new SpeechSynthesisUtterance;
su.lang="en";
su.pitch=.1;
su.pitch=.1;
su.onend=function(){
	recognition.start();
}
}

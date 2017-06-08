$(function() {
            console.log("connection")
            session = new QiSession("198.18.0.1");
            session.socket().on('connect', function () {
                console.log('QiSession connected!');
                session.service("ALMemory").done(function (ALMemory) {
                    ALMemory.subscriber("RecognizedName").done(function (subscriber) {
                        subscriber.signal.connect(function (state) {
                            // alert(state);
							$("#RecognizedName").text("Hello " + state);
							window.location.replace("#page2");
							sayAnimatedSpeech($("#RecognizedName").text());
                        });
                    });
					
					ALMemory.subscriber("PictureTaken").done(function (subscriber) {
                        subscriber.signal.connect(function (state) {
                            alert(state);
							
                        });
                    });

                });
            }).on('disconnect', function () {
                console.log('QiSession disconnected!');
            });
        });


function sayAnimatedSpeech(text) {
  session.service('ALAnimatedSpeech').then(function (tts) {
    tts.say(text);
  }, function (error) {
    console.log(error);
  })
}

function recogniseName() {
            session.service("ALMemory").done(function(memory) {
                memory.raiseEvent("recogniseName", "1");
            }).fail(function(error) {
                console.log("An error occurred:", error);
            });
        }
		
function takePicture() {
            session.service("ALMemory").done(function(memory) {
                memory.raiseEvent("takePicture", "1");
            }).fail(function(error) {
                console.log("An error occurred:", error);
            });
        }		

function raiseMenuDialog() {
            session.service("ALMemory").done(function(memory) {
                memory.raiseEvent("goToMenuPageEvent", "1");
            }).fail(function(error) {
                console.log("An error occurred:", error);
            });
        }

function goTo(url){
            session.service("ALDialog").then(function(dialog){
    dialog.forceInput(url);
});
        }
        $(function() {
            console.log("connection")
            session = new QiSession("198.18.0.1");
            session.socket().on('connect', function () {
                console.log('QiSession connected!');
                session.service("ALMemory").done(function (ALMemory) {
                    ALMemory.subscriber("pepperUnderstoodEvent").done(function (subscriber) {
                        subscriber.signal.connect(function (state) {
                            $(function(){
                            	$(".pulse-microphone").css( "webkit-animation", "inherit" );
                            	$(".pulse-megaphone").css( "webkit-animation", "inherit" );
                                $(".pepperUnderstood").typed({
                                    strings: [state],
                                    showCursor: false,
                                    typeSpeed: 0
                                });
                            });
                        });
                    });

                    ALMemory.subscriber("pepperListeningEvent").done(function (subscriber) {
                        subscriber.signal.connect(function (state3) {
                            $(function(){
                            	$(".pulse-microphone").css( "webkit-animation", "pulse 1s infinite" );
                            	$(".pulse-megaphone").css( "webkit-animation", "inherit" );
                            });
                        });
                    });
                    ALMemory.subscriber("pepperSaidEvent").done(function (subscriber) {
                        subscriber.signal.connect(function (state2) {
                        	$(function(){
                        		$(".pulse-microphone").css( "webkit-animation", "inherit" );
                        		$(".pulse-megaphone").css( "webkit-animation", "pulse 1s infinite" );
                            	$(".pepperSaid").typed({
                                strings: [state2],
                                showCursor: false,
                                typeSpeed: 0
                            	});
                        	});
                    	});
                    });
                });
            }).on('disconnect', function () {
                console.log('QiSession disconnected!');
            });
        });



    function raiseChatBotMode() {
        session.service("ALMemory").done(function(memory) {
            memory.raiseEvent("goToChatBotModeEvent", "1");
        }).fail(function(error) {
            console.log("An error occurred:", error);
        });
    }

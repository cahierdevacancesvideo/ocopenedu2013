(function() {
 
setTimeout(function(){

        var e = document.createElement('script');
        e.async = true;
        e.type = 'text/javascript';
        e.src = 'http://api.dmcdn.net/all.js';
        var s = document.getElementsByTagName('script')[0];
 
        s.parentNode.insertBefore(e, s);

},2000);

    }());
 
    // This function init the DMplayer once the SDK is loaded
    window.dmAsyncInit = function()
    {	var step = 0;
        // PARAMS is a javascript object containing parameters to pass to the DMplayer if any (eg: {autoplay: 1})
        var PARAMS = {background : '222222', autoplay : 0, chromeless : 0,
                                foreground : '444444',
                                highlight : '857580',
                                info : 1, network : 'dsl'};
        var DMplayer = DM.player("DMplayer", {video: bdd.video[video].id, width: "1400", height: "500", params: PARAMS});
 
 
        // 4. We can attach some events on the DMplayer (using standard DOM events)
        DMplayer.addEventListener("playing", function(e)
        {
                //player.setVolume(100); 
        });
 
        

        //----- PLAY / PAUSE - OK -----//
        
       
        var controls = ['pause'];
        for (var i = 0; i < controls.length; i++)
        {
                $('body').append('<button id=\'' + controls[i] + '\'>' + controls[i]  + '</button>');
                var lc = '#' + controls[i];
                $(lc).click(function() {
 
                        eval('DMplayer.' + this.id + '();');
                });
        }
        
        $('.refreshplayer').click(function()
			{
			var xid = $(this).data('xid');
	
			DMplayer.load(xid);
			$('#qcm').fadeOut();
			$('#qcm').append('<section id="question"></section><section id="reponse1"	class="reponse" data-true="0"></section><section id="reponse2"	class="reponse" data-true="1">reponse</section><section id="reponse3"	class="reponse" data-true="0"></section><section id="reponse4"	class="reponse" data-true="0"></section>')
			
			
			});
        $('.reponse').click(function()
		{
			$('#qcm').fadeOut();
			DMplayer.play();
			
			if ($(this).data('true') == 1)
				note++;
			$('#note').text(note);
			step++;
		});
		
		
		DMplayer.addEventListener("timeupdate", function(e)
        {
            eventSent = false;
            t = String(DMplayer.currentTime);
            currentTime = t.split('.')
            endTime = String(DMplayer.duration).split('.');
            
            if( false == eventSent)
            {
            
            if (endTime[0] == currentTime[0])
            {
            	$('#qcm').css('background','black');
            	$('#qcm').html('');
            	$('#qcm').fadeIn();
            	$('#qcm').append('<header id="endnote"><h1 >Vous avez eu <strong id="nbnote">'+note*2+'<strong>/20</h1></header>');
            	
            }
          
            if (bdd.video[video].questions[step] != undefined && bdd.video[video].questions[step].time -1 == currentTime[0])
			{	
				DMplayer.pause();
				
				console.log(bdd.video[video].questions[step].time);
				
				width 	= parseInt($('#DMplayer').css('width'));
				height	= parseInt($('#DMplayer').css('height'));
				position = $('#DMplayer').offset();
				
				$('#qcm').css('width',width);
				$('#qcm').css('height',height);
				$('#qcm').css('left', position.left);
				$('#qcm').css('top',position.top);
				
				$('#qcm').fadeIn();
			}
                $('#question').html(bdd.video[video].questions[step].question);
		
				$('#reponse1').html(bdd.video[video].questions[step].answer[0].text);
				$('#reponse2').html(bdd.video[video].questions[step].answer[1].text);
				$('#reponse3').html(bdd.video[video].questions[step].answer[2].text);
				$('#reponse4').html(bdd.video[video].questions[step].answer[3].text);
		
				$('#reponse1').data('true', bdd.video[video].questions[step].answer[0].win);
				$('#reponse2').data('true', bdd.video[video].questions[step].answer[1].win);
				$('#reponse3').data('true', bdd.video[video].questions[step].answer[2].win);
				$('#reponse4').data('true', bdd.video[video].questions[step].answer[3].win);
		
				$('#question').html(bdd.video[video].questions[step].question);
		
			
			
		
            }
        });
  		
    }
    
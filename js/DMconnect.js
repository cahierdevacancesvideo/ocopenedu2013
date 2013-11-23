(function() {
 
        var e = document.createElement('script');
        e.async = true;
        e.type = 'text/javascript';
        e.src = 'http://api.dmcdn.net/all.js';
        var s = document.getElementsByTagName('script')[0];
 
        s.parentNode.insertBefore(e, s);
    }());
 
    // This function init the player once the SDK is loaded
    window.dmAsyncInit = function()
    {	var step = 0;
        // PARAMS is a javascript object containing parameters to pass to the player if any (eg: {autoplay: 1})
        var PARAMS = {background : 'ABE866', autoplay : 1, chromeless : 0,
                                foreground : '000000',
                                html : 0, highlight : '857580',
                                info : 1, network : 'dsl', autoplay : 1};
        var player = DM.player("player", {video: bdd.video[video].id, width: "1400e", height: "500", params: PARAMS});
 
 
        // 4. We can attach some events on the player (using standard DOM events)
        player.addEventListener("apiready", function(e)
        {
                console.log('apiready');
        });
 
        

        //----- PLAY / PAUSE - OK -----//
        
       
        var controls = ['pause'];
        for (var i = 0; i < controls.length; i++)
        {
                $('body').append('<button id=\'' + controls[i] + '\'>' + controls[i]  + '</button>');
                var lc = '#' + controls[i];
                $(lc).click(function() {
 
                        eval('player.' + this.id + '();');
                });
        }
        
        player.addEventListener("playing", function(e)
        {
            player.setVolume(0);        
        });
        $('.reponse').click(function()
		{
			$('#qcm').fadeOut();
			player.play();
			
			if ($(this).data('true') == 1)
				note++;
			$('#note').text(note);
			step++;
		});
		
		
		player.addEventListener("timeupdate", function(e)
        {
            eventSent = false;
            t = String(player.currentTime);
            currentTime = t.split('.')
            
            
            if( false == eventSent)
            {
            if (bdd.video[video].questions[step].time == currentTime[0])
			{
				console.log(currentTime[0]);
				console.log(currentTime[0]);
				console.log(step);
				
				player.pause();
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
    
function qcm(i) 
{
		$('#question').html(bdd.video[video].questions[i].question);
		
		$('#reponse1').html(bdd.video[video].questions[i].answer[0].text);
		$('#reponse2').html(bdd.video[video].questions[i].answer[1].text);
		$('#reponse3').html(bdd.video[video].questions[i].answer[2].text);
		$('#reponse4').html(bdd.video[video].questions[i].answer[3].text);
		
		$('#reponse1').data('true', bdd.video[video].questions[i].answer[0].win);
		$('#reponse2').data('true', bdd.video[video].questions[i].answer[1].win);
		$('#reponse3').data('true', bdd.video[video].questions[i].answer[2].win);
		$('#reponse4').data('true', bdd.video[video].questions[i].answer[3].win);
		
		$('#question').html(bdd.video[video].questions[i].question);
		
		setInterval(function()
		{	
			if (bdd.video[video].questions[i].time == currentTime)
			{
				$('#pause').click();
				$('#qcm').fadeIn();
			}
		}, 1000);//(secondes)
	
}
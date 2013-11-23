$(document).ready(function()
{
		$('#vosvideos').append('<div class="row">');
		while (counter < nbvideo)
		{
			$('#vosvideos').append('<div class="4u"><section class="box"><a href="'+bdd.video[counter].link+'" class="image image-full"><img src="'+bdd.video[counter].min+'" alt="" /></a><header><h3>'+bdd.video[counter].title+'</h3></header><p>'+bdd.video[counter].description+'</p><footer><a href="'+bdd.video[counter].link+'" class="button alt">Find out more</a></footer></section></div>');
			if(counter + 1 % 3 == 0)
			{
				$('#vosvideos').append('</div>');
				$('#vosvideos').append('<div class="row">');
			}
			counter++;
		}
		if (counter + 1 % 3 != 0)
			$('#vosvideos').append('</div>');											
});

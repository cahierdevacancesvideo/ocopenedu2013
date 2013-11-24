$(document).ready(function()
{

		$('#vosvideos').append('<div class="row">');
		while (counter - 1 < nbvideo)
		{
		lock1 ='';
		var button = 'Voir';
		if( bdd.video[counter].date > date )
		{
			lock1 = '<img src="images/lock_grey.png" class="lock"/>';
			button ='Bloqué';
		}
			console.log(bdd.video[counter]);
			$('#vosvideos').append('<div class="4u"><section class="box">'+lock1+'<a href="'+bdd.video[counter].link+'" class="image image-full"><img id="'+bdd.video[counter].id+'"src="'+bdd.video[counter].min+'" alt="" /></a><header><h3>'+bdd.video[counter].title+'</h3></header><p>'+bdd.video[counter].description+'</p><footer><a href="'+bdd.video[counter].link+'" class="button alt refreshplayer" data-xid="'+bdd.video[counter].id+'">'+button+'</a></footer></section></div>');
		if(bdd.video[counter].date > date)
		{
			$('#'+bdd.video[counter].id).css('opacity',0.5);
		}
			if(counter + 1 % 3 == 0)
			{
				$('#vosvideos').append('</div>');
				$('#vosvideos').append('<div class="row">');
			}
			counter++;
		}
		if (counter + 1 % 3 != 0)
			$('#vosvideos').append('</div>');		
			
			
		$('.refreshplayer').click(function()
		{
			var xid = $(this).data('xid');
			alert(xid);
			DMplayer.load(xid);
			
		});
});

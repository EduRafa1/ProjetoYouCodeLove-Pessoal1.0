$(function(){
	$('.cursos-ind a').click(function(){
		var href = $(this).attr('href');
		var offsetTop = $(href).offset().top - 39;
		$('html,body').animate({'scrollTop': offsetTop},2000);
		return false;
	})


	$('.topo a').click(function(){
		var href = $(this).attr('href');

		var offSetTop = $(href).offset().top - 180;

		$('html,body').animate({'scrollTop':offSetTop},1500);
		return false;
	})
})
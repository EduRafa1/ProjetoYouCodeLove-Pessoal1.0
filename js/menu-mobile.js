$(function(){
	verificarClickFechar();

	$('#menu-mobile').click(function(){
		$(this).find('ul').slideToggle();
	});
	
	/*
	$('#cursos').click(function(){
		$(this).find('.cursos-cursos').slideToggle();
	})
	*/
	 	function verificarClickFechar(){
 		var el = $('body');

 		el.click(function(){
 			$('#menu-mobile ul').fadeOut();
 		})
 		$('#menu-mobile').click(function(e){
 			e.stopPropagation();
 		})
 	}


})
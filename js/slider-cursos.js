$(function(){
	var delay = 7000;
	var indexDelay;
	var valorDelay;
	var curIndex = 0;
	var amt;
	var container =container_rest = amt / 1.5;
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	initSliderInformatica();
	autoPlay();
	clickSetas();




	function initSliderInformatica(){
		amt = $('.container-catalogo-az').length;
		container = $('.container-catalogo-cursos').length;

		var  sizeContainer = 100 * amt;
		var	 sizeBoxSingle = 100 / amt;

		 if(width <=680){
		 	sizeContainer = 300 * amt;		
		 }		 
		
		$('.container-catalogo-az').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');


	}

	/*//*/

	function autoPlay(){

		if(width >680){
			setInterval(function(){
				curIndex++;
				container_rest = amt / 1.5;
				if(curIndex == container_rest){
					curIndex = 0;
				}
				console.log(delay);
				

				goSlider(curIndex);
			},delay);
		}
		if(width <=680){
			setInterval(function(){
				curIndex++;
				 var container_rest = container - 6;
				if(curIndex == container_rest){
					curIndex = 0;
				}
				goSlider(curIndex);
			},delay);
		}
	}
	/*Click setas*/



	function clickSetas(){
		$('#btn-setas span:nth-of-type(2)').click(function(){
			if (width > 680) {
				
				curIndex+=1;
				
				
				container_rest = amt / 1.5;

				if (curIndex >= container_rest) {
					curIndex=3;

				}
				var offSetMin = $('.container-catalogo-cursos').eq(curIndex).offset().left -  $('.scroll-wraper').offset().left;
				

				$('.scroll-equip').animate({'scrollLeft':offSetMin});
			}
			if(width <= 680){
				curIndex+=1;
				delay = 0;
				

				if (curIndex >= 5) {
					curIndex= 5;

				}
				var offSetMin = $('.container-catalogo-cursos').eq(curIndex).offset().left -  $('.scroll-wraper').offset().left;
				$('.scroll-equip').animate({'scrollLeft':offSetMin});
			}
		})

			$('#btn-setas span:nth-of-type(1)').click(function(){
			curIndex--;
		
		

			if (curIndex <= 0) {
				curIndex = 0;

			}
			var offSetMin = $('.container-catalogo-cursos').eq(curIndex).offset().left -  $('.scroll-wraper').offset().left;
			

			$('.scroll-equip').animate({'scrollLeft':offSetMin});
		})
	}
	/* ; */


	function goSlider(curIndex){


		
			var offSetMin = $('.container-catalogo-cursos').eq(curIndex).offset().left -  $('.scroll-wraper').offset().left;
			

			$('.scroll-equip').animate({'scrollLeft':offSetMin});
		
}

	$(window).resize(function(){
		setTimeout(function() {

			if (width > 470) 
		  		location.reload();	
			
		},500);		
	})
})
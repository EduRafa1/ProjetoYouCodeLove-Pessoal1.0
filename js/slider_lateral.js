$(function(){
	
	var delay = 7000;
	var curIndex = 0;
	var amt;


	

	initSlider();
	criaButtom();
	

	autoPlay();
	

	function initSlider(){
		amt = $('.slider').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

		$('.slider').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');
	}
	function criaButtom(){
		for(var i = 0 ; i < amt ; i++){
			if (i == 0) {
				$('.container-buttom').append('<div class="btn"><span style="background-color:white;"></span></div>');
			}else{
				$('.container-buttom').append('<div class="btn"><span></span></div>');
			}

		}
	}
	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt){
				$('.container-buttom span').css('background-color','black');
				curIndex = 0;

			}

			goSlider(curIndex);
		},delay);
	}




	function goSlider(curIndex){
		

		var offsetX = $('.slider').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;


		$('.scroll-equip').stop().animate({'scrollLeft':offsetX});
		$('.container-buttom span').eq(curIndex).css('background-color','white');


	}


	$(window).resize(function(){
		curIndex= 0;
		offsetX= 0;
		$('.container-buttom span').css('background','black');
		$('.container-buttom span').eq(curIndex).css('background','white');
		$('.scroll-equip').stop().animate({'scrollLeft':offsetX});
	})



	



})
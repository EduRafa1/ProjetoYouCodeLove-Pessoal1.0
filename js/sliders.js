$(function(){
	$('.curso-destaque').slick({
		centerMode: true,
		slidesToShow: 3,
		arrows: false,
		responsive:[

		{
			breakpoint:1010,
			settings:{
				centerMode:false,
				slidesToShow:2,
			}
		},
		{
			breakpoint:630,
			settings:{
				centerMode:true,
				slidesToShow:1,
			}
		},
			{
			breakpoint:420,
			settings:{
				centerMode:false,
				slidesToShow:1,
			}
		}

		]
	});
})
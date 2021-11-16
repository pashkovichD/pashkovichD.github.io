jQuery(document).ready(function($) {	
	// $('.articles__list').slick({
	// 	infinite: true,
	// 	arrows: true,
	// 	dots: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	variableWidth: true,
	// 	appendArrows: $('.articles__arrows'),
 //        prevArrow: '<svg class="articles__arrow--prev" width="31" height="8"><use xlink:href="#icon-arrow-prev"></use></svg>',
 //        nextArrow: '<svg class="articles__arrow--next" width="49" height="8"><use xlink:href="#icon-arrow-next"></use></svg>',
 //        // appendArrows: $('.your-class-arrow'),
 //        // prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
 //        // nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'     
	// });

	$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 600) {
        	consortiumfy();
	    }

	    if ($windowWidth <= 1200) {
        	// consortiumfy();
        	articlesfy();
	    }

	    if ($windowWidth <= 768) {
        	recent_articlesfy();
	    }
	});

	consortiumfy();
	articlesfy()
	recent_articlesfy()

	function consortiumfy() {
		$('.consortium__list').not('.slick-initialized').slick({			
			infinite: true,
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			draggable: true,
			rows: 0,
			variableWidth: true,
			responsive: [{
				breakpoint: 4000,
				settings: "unslick"
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});
	}

	function articlesfy() {
		$('.articles__list').not('.slick-initialized').slick({			
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			rows: 0,
			variableWidth: true,
			appendArrows: $('.articles__arrows'),
	        prevArrow: '<svg class="articles__arrow--prev" width="31" height="8"><use xlink:href="#icon-arrow-prev"></use></svg>',
	        nextArrow: '<svg class="articles__arrow--next" width="49" height="8"><use xlink:href="#icon-arrow-next"></use></svg>',
	        // appendArrows: $('.your-class-arrow'),
	        // prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
	        // nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	        responsive: [{
				breakpoint: 12000,
				settings: "unslick"
			}, {
				breakpoint: 1200,
				settings: {			
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]

			// infinite: true,
			// arrows: false,
			// dots: true,
			// slidesToShow: 2,
			// slidesToScroll: 2,
			// draggable: true,
			// rows: 0,
			// variableWidth: true,
			// responsive: [{
			// 	breakpoint: 4000,
			// 	settings: "unslick"
			// }, {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2
			// 	}
			// }]
		});
	}

	function recent_articlesfy() {
		$('.recent-articles__list').not('.slick-initialized').slick({			
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			rows: 0,
			variableWidth: true,
			appendArrows: $('.recent-articles__arrows'),
	        prevArrow: '<svg class="articles__arrow--prev" width="31" height="8"><use xlink:href="#icon-arrow-prev"></use></svg>',
	        nextArrow: '<svg class="articles__arrow--next" width="49" height="8"><use xlink:href="#icon-arrow-next"></use></svg>',
	        responsive: [{
				breakpoint: 12000,
				settings: "unslick"
			}, {
				breakpoint: 768,
				settings: {			
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	// $('.articles__list').append('<div>', {text: 'Кот в шляпе'});

	/*$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 1200) {
	        slickfy();
	    }
	});

	slickfy();

	function slickfy() {
		$('.works__list').not('.slick-initialized').slick({			
			infinite: true,
			arrows: false,
			dots: true,		
			variableWidth: true,
			responsive: [{
				breakpoint: 99999,
				settings: "unslick"
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}]
		});	
	}	*/

	/*$('.company__list--first').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		asNavFor: '.company__list--second'
	});
	$('.company__list--second').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		asNavFor: '.company__list--first'
	});*/


	/*$('.post__list--related').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true
	});	*/
});

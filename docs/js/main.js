(function ($) {
"use strict";


/* moblie-menu */
$('.main-menu nav').meanmenu({
	meanMenuContainer: '.mobile-menu-area',
	meanScreenWidth: "767",
});


// filter items on button click
$('.portfolio-active').imagesLoaded( function() {
	  $('.filter-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	var $grid = $('.portfolio-active').isotope({
	  itemSelector: '.portfolio-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio-item'
	  }
	})
	
	/* filter menu active class  */
	$('.filter-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	
});


/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1        
        }
    }
})

/* blog-active */
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:3
        },
        768:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

/* counter */
$('.counter').counterUp(3000);

/* magnificPopup image popup */
$('.image-popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
    }
});

/* magnificPopup video popup */
$('.video-popup').magnificPopup({
	type: 'iframe'
});


})(jQuery);	
//hides/shows navbar on scroll down/up
$(function () {
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;

		if (prevScrollpos > currentScrollPos) {
			$(".navbar").css('top', '0px');
		} else {
			$('.navbar').css('top', '-200px');
			$('.navbar').css('position', 'fixed');
		}
		prevScrollpos = currentScrollPos;
	}
});


//Open Navigation bar on mobile
function toggleNavbar() {
	var opened = $(".navbar__menu").hasClass("is-opened");
	var toggled = $(".navbar__toggler").hasClass("is-toggled");

	if (opened === false && toggled === false) {
		$(".navbar__menu").addClass("is-opened");
		$(".navbar__toggler").addClass("is-toggled");

	} else {
		$(".navbar__menu").removeClass("is-opened");
		$(".navbar__toggler").removeClass("is-toggled");
	}
}

//Navbar active state 
$(document).ready(function () {
	var loc = window.location.href;
	$(".navbar__item").children().each(function () {
		if (this.href === loc) {
			$(this).addClass("is-active");
		}
	});
});

//close navbar when clicked outside
$(function () {
	$(document).click(function (event) {
		var clickover = $(event.target);
		var opened = $(".js-navbar__menu").hasClass("is-opened");
		var toggled = $(".js-navbar__bar").hasClass("is-toggled");

		if (opened === true && toggled === true && !clickover.hasClass("navbar__toggler") && !clickover.hasClass("js-navbar__bar") && !clickover.hasClass("js-navbar__menu") && !clickover.hasClass("js-navbar__item") && !clickover.hasClass("js-navbar")) {
			$(".js-navbar__menu").removeClass("is-opened");
			$(".js-navbar__bar").removeClass("is-toggled");
		}
	});
});

//close navbar-menu on scroll
$(function () {
	$(document).scroll(function () {
		var opened = $(".js-navbar__menu").hasClass("is-opened");
		var toggled = $(".js-navbar__bar").hasClass("is-toggled");

		if (opened === true && toggled === true) {
			$(".js-navbar__menu").removeClass("is-opened");
			$(".js-navbar__bar").removeClass("is-toggled");
		}
	});
});

//close navbar when pressed ESC key
$(document).keyup(function (e) {
	var opened = $(".js-navbar__menu").hasClass("is-opened");
	var toggled = $(".js-navbar__bar").hasClass("is-toggled");

	if (e.keyCode == 27) { // escape key maps to keycode `27`
		if (opened === true && toggled === true) {
			$(".js-navbar__menu").removeClass("is-opened");
			$(".js-navbar__bar").removeClass("is-toggled");
		}
	}
});

//hides team modal when pressed ESC key
$(document).keyup(function (e) {
	var teamModal = $(".team-modal").hasClass("is-shown");

	if (e.keyCode == 27) { // escape key maps to keycode `27`

		if (teamModal === true) {
			$(".team-modal").removeClass("is-shown");
			$('.team-modal__slide').removeClass('is-shown');
			$('body').removeClass('overflow-hidden');
		}
	}
});

//hides team modal when clicked outside
$(function () {
	$(document).click(function (event) {
		var clickover = $(event.target);
		var teamModal = $(".team-modal").hasClass("is-shown");

		if (teamModal === true && clickover.hasClass("team-modal")) {
			$(".team-modal").removeClass("is-shown");
			$(".team-modal__slide").removeClass("is-shown");
			$("body").removeClass("overflow-hidden");
		}
	});
});

//initialize datepicker
$(function () {
	$(".datepicker").datepicker({
		minDate: '0',
		maxDate: '+3Y'
		//changeMonth: true,
		//changeYear: true
	});
});

//initialize lightGallery
$(function () {
	$(".gallery").lightGallery({
		selector: '.gallery__item',
		showThumbByDefault: false
	});
});

//gallery
$(function () {

	// working isotope with masonry and imagesLoaded but no lazyload
	//	var $grid = $('.gallery').imagesLoaded(function () {
	//		$grid.isotope({
	//			itemSelector: '.gallery__item',
	//			percentPosition: true,
	//
	//			masonry: {
	//				// use outer width of grid-sizer for columnWidth
	//				columnWidth: '.gallery__sizer',
	//				gutter: '.gallery__gutter'
	//			}
	//		});
	//	});

	jQuery(document).ready(function ($) {
		var $win = $(window),
			$grid = $('.gallery').imagesLoaded(),
			$imgs = $(".gallery__item img");

		$grid.isotope({
			itemSelector: '.gallery__item',
			percentPosition: true,

			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.gallery__sizer',
				gutter: '.gallery__gutter'
			}
		});

		$grid.on('layoutComplete', function () {
			$win.trigger("scroll");
		});

		$imgs.lazy({
			failure_limit: Math.max($imgs.length - 1, 0)
		});

		// filter functions
		var filterFns = {};

		// bind filter button click
		$('.gallery-filter').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			// use filterFn if matches value
			filterValue = filterFns[filterValue] || filterValue;
			$grid.isotope({
				filter: filterValue
			});

			$(".gallery").data('lightGallery').destroy(true);
			$(".gallery").lightGallery({
				selector: filterValue.replace('*', '')
			});
		});

		// change active state class on buttons
		$('.gallery-filter').each(function (i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function () {
				$buttonGroup.find('.is-active').removeClass('is-active');
				$(this).addClass('is-active');

			});

		});
	});
});

//show gallery filter on mobile
function galNav() {
	var opened = $(".gallery-filter__menu").hasClass("is-active");

	if (opened === false) {
		$(".gallery-filter__menu").addClass("is-active");
		$(".gallery-filter__toggler").addClass("is-active");

	} else {
		$(".gallery-filter__menu").removeClass("is-active");
		$(".gallery-filter__toggler").removeClass("is-active");
	}
}

//shows back to top button after scrolling 800px
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.js-back-to-top').fadeIn('slow');
	} else {
		$('.js-back-to-top').fadeOut('slow');
	}
});

//initialize owl-carousel for featured-blogs
$(function () {
	$('.owl-carousel:not(".test-owl")').owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		responsiveClass: true,
		center: true,
		dots: false,
		lazyLoad: true,
		autoplay: false,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3
			},
			1000: {
				items: 5,
				loop: false
			}
		}
	});
});

//initialize owl-carousel for testimonials
$(function () {
	$('.test-owl').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		center: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	});
});

//initialize jQuery Lazy Load
$(function () {
	$('.lazy').Lazy({
		// your configuration goes here
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		effectTime: 500,
		threshold: 0,
		visibleOnly: true,
		onError: function (element) {
			console.log('error loading ' + element.data('src'));
		}
	});
});

//initialize fotorama
$(function () {
	$('.fotorama').fotorama({
		width: '100%',
		ratio: 4 / 3,
		nav: 'thumbs',
		allowfullscreen: true,
		keyboard: true,
		transition: 'slide',
		autoplay: '3000',
		stopautoplayontouch: false,
		loop: true,
		shuffle: false

	});
});

$(function () {
	//	$('.testimonials').slick();
});

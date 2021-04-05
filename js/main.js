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

//initialize datepicker
$(function () {
	$(".datepicker").datepicker({
		minDate: '0',
		maxDate: '+3Y'
		//changeMonth: true,
		//changeYear: true
	});
});

//shows back to top button after scrolling 800px
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.js-back-to-top').fadeIn('slow');
	} else {
		$('.js-back-to-top').fadeOut('slow');
	}
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

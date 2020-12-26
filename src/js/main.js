$( document ).ready( () => {

	//Menu transforming in scrool

	navScroll();

	// aad  some code 

	function navScroll() {
		if ( $(window).scrollTop() == 0) {
			$("#header").removeClass( "header-scroll" );
		} else {
			$("#header").addClass( "header-scroll");
		}
	}

	$(window).scroll( function() {
		navScroll();
	});

	//Burger
	

	$("#burger").click( function() {
		$("#burger").toggleClass("header__burger-active");
		$("#nav").toggleClass("header__menu-active");
		$('body').toggleClass('overflow-hidden');
	});

	$('.calculus__slider').slick({
		infinite: false,
		dots: true,
		appendDots: '.calculus__dots',
		appendArrows: '.calculus__buttons',
		prevArrow:"<button type='button' class='button lines animation slick-prev pull-left'><span>Назад</span></button>",
      nextArrow:"<button type='button' class='button lines animation slick-next pull-right'><span>Далее</span></button>"
	});

	$('.realization--item__wrapper').click( function() {
		text = $(this).children('.realization--value').text();
		$('.calculus--preview__realization--value').text( text);
	});

});
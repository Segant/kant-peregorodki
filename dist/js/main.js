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

	const paginationTextDesktop = [
		'1. исполнение',
		'2. тип открывания',
		'3. размеры',
		'4. цвет',
		'5. стёкла',
		'6. контакты',
	];

	
	$('.calculus__slider').slick({
		infinite: false,
		dots: true,
		appendDots: '.calculus__dots',
		appendArrows: '.calculus__buttons',
		prevArrow:"<button type='button' class='button lines animation slick-prev pull-left'><span>Назад</span></button>",
		nextArrow:"<button type='button' class='button lines animation slick-next pull-right'><span>Далее</span></button>",
		customPaging: function(slick,i) {
			return `<a>${paginationTextDesktop[i]}</a>`;
		},
		responsive: [{
			breakpoint: 768,
			settings: {
				swipe: false,
				dots: false,
			},
		}],
	});

	if( ($(window).width() < 1024) && $('.calculus').length){
		$('.calculus--preview__row_last').children().appendTo('.calculus--preview__row_first');
	}

	$('.realization--item__wrapper').click( function() {
		const text = $(this).children('.realization--value').text();
		$('.calculus--preview__realization--value').text(text);

		const image = $(this).children('.realization--item__image').clone();
		$('.calculus--preview__image').empty();
		$('.calculus--preview__image').append( image);
	});

});
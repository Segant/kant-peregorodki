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
		adaptiveHeight: true,
		draggable: false,
		customPaging: function(slick,i) {
			return `<a>${paginationTextDesktop[i]}</a>`;
		},
		responsive: [{
			breakpoint: 768,
			settings: {
				swipe: false,
				dots: false,
				variableWidth: true
			},
		}],
	});

	$('.calculus__slider').on('beforeChange', function(event, slick, direction, currentSlide){
		page = currentSlide + 1;

		text = paginationTextDesktop[currentSlide].slice(3);

		$(".calculus-custom__dots").text("Шаг: "+page+"/6 "+ text);

		$(".holder-border").each(function(i,elem) {

			if( i == currentSlide ) {
				$(this).addClass('holder-border_active');
			} else {
				$(this).removeClass('holder-border_active');
			}
		});

		if( $(window).width() <= 768 ) {

			if( currentSlide == 2 || currentSlide == 5 ) {
				$(".calculus__arrow").hide();
			} else {
				$(".calculus__arrow").show();
			}

		}
	});

	$(".calculus__arrow_prev").click( function() {
		$(".slick-slide.slick-current .calculus__arrow-container").animate({
			scrollLeft: "-=180",
		});
	});

	$(".calculus__arrow_next").click( function() {
		$(".slick-slide.slick-current .calculus__arrow-container").animate({
			scrollLeft: "+=180",
		});
	});

	if( ($(window).width() < 1024) && $('.calculus').length){
		$('.calculus--preview__row_last').children().appendTo('.calculus--preview__row_first');
	}

	$('.appending-item').click( function() {
		const text = $(this).children('.appending-item__value').text();
		const holder = $(`#${$(this).attr('data-holder-id')}`);
		holder.text(text);

		if( $(this).children('.appending-item__image').length) {
			const image = $(this).children('.appending-item__image').clone();
			$('#appending-image-holder').empty();
			$('#appending-image-holder').append( image);
		}
	});

	$(".sizes-form__input").blur( function() {
		let count = '';

		if( $(".sizes-form__input_a").val().length) {
			count += $(".sizes-form__input_a").val();
		}
		if( $(".sizes-form__input_b").val().length) {
			count += " x ";
			count += $(".sizes-form__input_b").val();
		}
		if( $(".sizes-form__input_c").val().length) {
			count += " x ";
			count += number( $(".sizes-form__input_c").val());
		}

		$("#appending-sizes-holder").text( count);
	});

	function mobileCalculusSlides(){
		if(!($('.calculus__slider').length && $(window).width() <= 768)){
			return
		}
		const winW = $(window).width();
		
		$('.calculus__slider .slick-slide').width(winW).addClass('js-width');
		
	}

	mobileCalculusSlides();

	$('.color--item__popup').magnificPopup({
		type: 'image',
	});

});
$( document ).ready( () => {

	//Menu transforming in scrool

	navScroll();

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
	});

});
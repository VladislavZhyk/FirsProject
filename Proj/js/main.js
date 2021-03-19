$(function(){

	// ДЕЛАЕМ СЛАЙДЕР
	$('.slider__inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	});

	// ДЕЛАЕМ SELECT
	$('select').styler();

	// ДЕЛАЕМ ВТОРОЙ СЛАЙДЕР
	$('.news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	});

	// ВЫПАДАЮЩЕЕ UL МЕНЮ НА МОБИЛКЕ
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});

});
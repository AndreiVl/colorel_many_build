$(document).ready(function() {
  $('.header__btn').click(function() {
    if($('body .header__btn--opened').length) {
      $('.header__body').fadeOut(500);
    } else {
      $('.header__body').fadeIn(500);
    }

    $('.header__body').toggleClass('header__mobile');
    $('.header__btn').toggleClass('header__btn--opened');
    $('body').toggleClass('overflow-heidden ');
  });

  let scrolled = 0;

  changeScrolled();
});

$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  menuScrollDesktop(st);
});

$(window).resize(function(){
  let st = $(window).width();

  menuDesktopShow(st);
  changeScrolled();
});

function menuScrollDesktop(st) {
  if(st > scrolled){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }
};

function menuDesktopShow(st) {
  if(st > 1199) {
    $('.header__body').attr('style', '');
    
    if($('.overflow-heidden').length) {
      $('body').removeClass('overflow-heidden');
    }
  }
};

function changeScrolled() {
  if($(window).width() < 768){
    scrolled = 0;
  }      
  else if($(window).width() > 767 && $(window).width() < 1200) {
    scrolled = 95;
  } else {
    scrolled = 129;
  }
};


$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('cool-input__input_filled');
  } else {
      $this.addClass('cool-input__input_filled');
  }
});
$('.input--phone .input__input').mask('+7 (000) 000-0000');

$('.modal-link').on('click', function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});
$('.menu__item--dropdown').on('click', function(e) {
  if($(window).width() < 1199) {
    e.preventDefault();

    if($(this).find('.menu__level-2--open').length) {
      $(this).find('.menu__level-2').fadeOut(500);
    } else {
      $(this).find('.menu__level-2').fadeIn(500);
    }
  
    $(this).find('.menu__level-2').toggleClass('menu__level-2--open');
  }
});


// jQuery(function($){
// 	$(document).mouseout(function (e){
//     let div = $('.menu__level-2');
//     let user_bag = $('.menu__item--dropdown'); 
// 		if (!div.is(e.target) && div.has(e.target).length === 0) { 
//       if(!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
//         $('.menu__level-2--open').fadeOut(500);
//         div.removeClass('menu__level-2--open');
//       }
// 		}
// 	});
// });

$('.menu__level-2').on('click', function(e) {
  e.stopPropagation();
});
$('.photo-gallery__images').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

$(function() {
	$('.am-container').montage({
    liquid: false, 
    fillLastRow	: true,
    alternateHeight	: true,
    alternateHeightRange : {
      min	: 280,
      max	: 280
    },
    margin : 10
	});
});	
$('.slider-top').slick({
  dots: true,
  dotsClass: 'slider-top__dots',
  arrows: false,
  adaptiveHeight: true
});
$('.textarea__textarea').blur(function(){
  if($(this).val() != '') {
    $('.textarea__placeholder').hide();
  } else {
    $('.textarea__placeholder').show();
  }
});
$(function() {
	let btnScroll = $('.to-top');

	function scrollBtn() {
		let top = $(this).scrollTop();

		if ( top > 600) {
			btnScroll.fadeIn(350);
		}
		else {
			btnScroll.fadeOut(500);
		}
	};
	scrollBtn();
	
	$(document).on('scroll', scrollBtn);
	btnScroll.on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 350);
	});
});
;
svg4everybody();
// вызов полифила для корректного отображения svg в IE

//функция смены цвета иконки при навереднии на кнопку в блоке preview_block
function setActiveColor(id) {
    $(id).addClass("preview__icon--active")
    $(id + "-container").addClass("preview--active")
};
//при потере фокуса, иконка и кнопка становятся не активными - стандартный цвет
function unsetActiveColor(id) {
    $(id).removeClass("preview__icon--active")
    $(id + "-container").removeClass("preview--active")
};


// перестраивание меню
$(".navbar__toggle").click(function() {
     if( $(".navbar__collapse").css("display") == "none") {
          $(".navbar__collapse").css("display", "block");
     } else {
         $(".navbar__collapse").css("display", "");
     }

});
//при наведении на пункты выпадающего меню, пункт portfolio не теряет фокус и остается красным, пока не нажмешь на svg иконку и не скроешь выпадающее меню
$(".nav__icon-portfolio").click(function() {
     if( $(".portfolio-list").css("display") == "none") {
          $(".portfolio-list").css("display", "block");
          $(".nav__item-portfolio").css({"background-color":"rgb(226, 83, 75)", "box-shadow": "0 .25em 0 0 rgb(221, 52, 52)"});
     } else {
         $(".portfolio-list").css("display", "none");
         $(".nav__item-portfolio").css({"background-color":"", "box-shadow": ""});
     }

});
//появление формы поиска и ее скрытие при клике на пустое пространство окна браузера
$(".nav__button").click(function() {
    $(".nav__input").css('display','block');
    $(".nav__input").focus();
    $(".nav__input").val("");
});

function hideSiteSearch() {
    $(".nav__input").css('display', 'none');
};


//блок main_slider_block - подключение слайдера из библиотеки slick
$(document).ready(function(){
  $(".slider-conteiner").slick({
      infinite: true,
      dots: true,
      dotsClass:"status-bar",
      arrows:true,
      prevArrow:".slider__btn-left",
      nextArrow: ".slider__btn-right",
      slidesToShow: 1,//количество картинок, выводимых в видимой зоне
      slidesToScroll: 1,//сколько нужно поменять картинок при переключении
      initialSlide: 1//определяет картинку, с которой начнется показ слайд-шоу
  });

});

//блок mini_slider_block - подключение слайдера из библиотеки slick
//Responsive Display
$(document).ready(function(){
$('.mini-slider-conteiner').slick({
  infinite: true,
  arrows:true,
  prevArrow:".mini-slider__header-btn-left",
  nextArrow: ".mini-slider__header-btn-right",
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1

      }
    },
    {
      breakpoint: 860,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
  },
  {
    breakpoint: 520,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
]
});
});

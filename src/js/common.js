// svg icons support ie11
(function(){
    svg4everybody();
}());

// header
(function () {
    const header = $('.js-header'),
    	    burger = header.find('.js-header-burger'),
    	    menu = header.find('.js-menu'),
          items = menu.find('.js-menu-item'),
          close = menu.find('.js-menu-close'),
          back = menu.find('.js-menu-back'),
    	    html = $('html'),
    	    body = $('body');
    burger.on('click', function(){
        burger.toggleClass('active');
        menu.toggleClass('visible');
        html.toggleClass('no-scroll');
        body.toggleClass('no-scroll');
    })
    items.each(function(){
        let item = $(this),
            head = item.find('.js-menu-head');

        head.on('click', function(){
            if(!item.hasClass('active')){
                menu.removeClass('left');
                items.removeClass('active');
                menu.addClass('left');
                item.addClass('active');
            }else{
                items.removeClass('active');
                menu.removeClass('left');
            }
        });
        back.on('click', function(){
            menu.removeClass('left');
            items.removeClass('active');
        });
        close.on('click', function(){
            items.removeClass('active');
            burger.toggleClass('active');
            menu.toggleClass('visible');
            menu.removeClass('left');
            html.removeClass('no-scroll');
            body.removeClass('no-scroll');
        });
    });
}());

// search
(function () {
    const search = $('.js-search'),
    	  btn = search.find('.js-search-btn');
   	btn.on('click', function(){
   		  search.toggleClass('show');
   	});
}());

// global variables
var prevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11.707 1.293a1 1 0 0 1 0 1.414L6.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z" fill-rule="evenodd"/></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.293 1.293a1 1 0 0 0 0 1.414L9.586 8l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z" fill-rule="evenodd"/></svg></button>';

$(document).ready(function() {

  // slider categories
  $('.js-slider-categories').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,
    infinite: true,
    responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2
          }
        }
    ]
  });

  // slider review
  $('.js-slider-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  });

  // slider card
  $('.js-slider-card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  // slider products
  $('.js-slider-products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
    ]
  });

  $('.js-slider-blog').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      {
         breakpoint: 9999,
         settings: "unslick",
      },
      {
         breakpoint: 768,
         settings: ""
      }
    ]
  });

  $(window).on('resize orientationchange', function() {
    $('.js-slider-blog').slick('resize');
  });

});

// favorite button
$('.card__favorite').on('click', function(){
    $(this).toggleClass('active');
});

// counter
(function(){
    const counters = $('.js-counter');
    counters.each(function(){
        const counter = $(this),
              minus = counter.find('.js-counter-minus'),
              plus = counter.find('.js-counter-plus'),
              input = counter.find('.js-counter-input');
        minus.on('click', function () {
            let count = parseInt(input.val()) - 1;
            count = count < 1 ? 1 : count;
            input.val(count);
        });
        plus.on('click', function () {
            input.val(parseInt(input.val()) + 1);
        });
        input.blur(function(){
            if ( input.val() == "") {
                input.val("0");
            }
        });
        input.bind("change keyup input click", function() {
            input.val(input.val().replace(/[^\d]/,""));
        });

    });
}());

// zoom
$(document).ready(function () {
    $(".js-zoom").ezPlus({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 504,
        zoomWindowHeight: 504,
        zoomWindowOffsetX: 50,
        borderSize: "5",
        borderColour: "#F6F7FB",
        responsive: true,
        respond: [
            {
                range: '768-1365',
                zoomType: 'inner',
                cursor: 'crosshair',
                borderSize: "0"
            },
            {
                range: '320-767',
                enabled: false,
                showLens: false
            }
        ]
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
      $('.card__preview').on('click', function(e){
        e.preventDefault();
      })
    }
});

// filters
(function(){
    const filters = $('.js-filters'),
          open = filters.find('.js-filters-open'),
          wrap = filters.find('.js-filters-wrap');
    open.on('click', function(){
        open.toggleClass('active');
        wrap.slideToggle();
    });
}());

// drop
(function(){
    const drops = $('.js-drop'),
          link = drops.find('.js-drop-link');
    drops.each(function(){
        const drop = $(this),
              head = drop.find('.js-drop-head'),
              body = drop.find('.js-drop-body');
        head.on('click', function(e){
            e.stopPropagation();
            if (!drop.hasClass('open')) {
                drops.removeClass('open');
                drop.addClass('open');
            } else {
                drops.removeClass('open');
            }
        });

        body.on('click', function(e){
            e.stopPropagation();
        });

        $(document).on('click', function() {
            drops.removeClass('open');
        });

    });

    link.on('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).toggleClass('active');
    });

}());

// select
$(document).ready(function() {
  $('select').niceSelect();
});

// faq
(function(){
    const faq = $('.js-faq'),
          items = faq.find('.js-faq-item');
    items.each(function(){
        let item = $(this),
            head = item.find('.js-faq-head'),
            body = item.find('.js-faq-body');

        head.on('click', function(){
            item.toggleClass('active');
            body.slideToggle();
        });
    });
}());

// checkout
(function(){
    const checkout = $('.js-checkout'),
          step = checkout.find('.js-checkout-step'),
          item = checkout.find('.js-checkout-item'),
          btn = checkout.find('.js-checkout-btn'),
          box = checkout.find('.js-checkout-box'),
          checkbox = checkout.find('.js-checkout-checkbox'),
          radio = checkout.find('.js-checkout-radio'),
          el = checkout.find('.js-checkout-el'),
          items = item.length;
    let   counter = 0;

    btn.on('click', function(){
        let currentNext = ++counter;
        step.eq(currentNext).addClass('active');
        item.hide();
        item.eq(currentNext).fadeIn();
    });

    checkbox.on('change', function(){
        $(this).parents('.js-checkout-item').find('.js-checkout-box').slideToggle();
    });

    radio.on('change', function(){
        let _this = $(this),
            indexThis = _this.parents('.js-checkout-payment').index();
        el.hide();
        el.eq(indexThis).fadeIn();
        return false;
    });
}());

// toggle body theme
(function () {
    const switchTheme = $('.js-theme'),
          body = $('body');

    switchTheme.on('change', function(){
        if (!body.hasClass('dark')){
            body.addClass('dark');
            localStorage.setItem('darkMode', "on");
        }else{
            body.removeClass('dark');
            localStorage.setItem('darkMode', "off");
        }
    });
}());


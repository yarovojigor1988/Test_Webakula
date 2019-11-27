$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    // $(".tour_carousel").slick('reinit');

    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).children().width($(window).width()*9/10);
    $(".tour_carousel").slick('slickSetOption', 'adaptiveHeight', true, true);

    console.log($(tabId).children());
    
    $(tabId).siblings('.tab_content').hide(400);
});

$(document).on('click', '.nav_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.header_nav').slideToggle(400); 
})

$(document).on('click', '.header_drop-opener > a', function(){
    $(this).next('.header_drop-opener > ul').slideUp(400);
    if ($(this).parents('.header_drop-opener').siblings().find('.header_nav-drop').is(":visible")){
        $(this).parents('.header_drop-opener').siblings().find('.header_nav-drop').slideUp();
        $(this).next().slideToggle();

    } else {
    $(this).next().slideToggle();
    }
   return false;
})

$(document).ready(function(){

    jQuery.validator.addMethod("checkMask", function(value, element) {
        return /\+\d{2}\(\d{3}\)\d{2}-\d{2}-\d{3}/g.test(value); 
    });
   

    $("#form").validate({
        rules:{

            name: {
                required: true,
                minlength: 2
            },

            email: {
                required: true,
                email: true
            },
            phone: {
                checkMask: true
            }
        },
        messages: {
            name: "Введите ваше имя",
            email: {
                required: "Введите вашу электронную почту",
                email: "Ваша почта должна быть в формате name@domain.com"
              },
            phone: {
              required: "Введите номер телефона",
              checkMask: "Введите полный номер телефона"
            }
          }
     });

    $("#phone").mask("+38(099)99-99-999", {autoclear: false});

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows:false,
        аccessibility: false
    });

    let slideQuantity;
    if ($(window).width() < '1024') {
            slideQuantity = 1;
        } else if ($(window).width() >= '1024' && $(window).width() < '1440') {
            slideQuantity = 2;
        } else if ($(window).width() >= '1440') {
            slideQuantity = 3;
        }


    $('.tour_carousel').slick({
        infinite: true,
        slidesToShow: slideQuantity,
        slidesToScroll: 1,
        arrows: true
    });

    if ($(window).width() <= '768') {
        $(document).on('click', '.footer_nav-title', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        })
    
    };


  });



    $(window).load(function(){
        
        $(".advantages_text").mCustomScrollbar({
            theme:"rounded-dots-dark"
        });
        
    });



  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 300; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
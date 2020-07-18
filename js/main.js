$(function(){

    $('.btn-menu').click(function(){
        $(this).toggleClass('open');
        $('.menu__list').toggleClass('open');
    });

    $('.slider__items').slick({
        fade: true,
        infinity: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      
    });

    $.Tween.propHooks.number = {
        get: function ( tween ){
            var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
            return  parseFloat(num) || 0;
        },
        
        set: function( tween ) {
            var opts = tween.options;
            tween.elem.innerHTML = (opts.prefix || '')
            + tween.now.toFixed(opts.fixed || 0)
            + (opts.postfix || '');
        }
    };    
    var blockStatus = true;
    var excellence_number = $(".excellence__item-number"); 

    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (excellence_number.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
            blockStatus = false; 
            $('#num-1').animate({ number: 2310 }, {
                duration: 2000
            });
    
            $('#num-2').animate({ number: 30 }, {
                duration: 2000,
                postfix: '%'
            });
            
            
            $('#num-3').animate({ number: 25 }, {
                duration: 3000,
                postfix: '%'
            });
        }
    });
  
});
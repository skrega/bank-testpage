$(function(){

    $('.slider__items').slick({
        fade: true,
        infinity: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      
    });

    // var show = true;
    // var countbox = ".excellence__items";
    // $(window).on("scroll load resize", function () {
    //     if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    //     var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    //     var w_height = $(window).height(); // Высота окна браузера
    //     var d_height = $(document).height(); // Высота всего документа
    //     var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    //     if (w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //         $('.excellence__item-number').css('opacity', '1');
    //         $('.excellence__item-number').spincrement({
    //             thousandSeparator: "",
    //             duration: 1200
    //         });
             
    //         show = false;
    //     }
   
		// $({numberValue: 0}).animate({numberValue: 1000}, {
		
		// 	duration: 1000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		// 	easing: "linear",
			
		// 	step: function(val) {
			
		// 		$(".excellence__item-number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
		// 	}
			
		// });



        var target_block = $(".excellence__item-number"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				$({numberValue: 0}).animate({numberValue: 1000}, {
				
					duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".excellence__item-number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
						
					}
					
				});
				
			}
			
		});
		
  
});
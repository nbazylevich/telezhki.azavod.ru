$(document).ready(function(){
		$(".owl-carousel.product1").owlCarousel({
			items: 1,
		  loop: true,
		  autoplay: false,
		  smartSpeed: 500,
			autoplayHoverPause: true,
		  pagination: true,
	    mouseDrag: false,
		  nav: false
		});
		$(".owl-carousel.slider_proizvodstvo_2").owlCarousel({
			items: 1,
		  loop: true,
		  autoplay: false,
		  smartSpeed: 500,
			autoplayHoverPause: true,
		  pagination: true,
	    mouseDrag: false,
		  nav: true,
			navText: ["&#8249;", "&#8250;"],
		});

		$('a[href="#panel2"]').click(function(){
	    setTimeout(slid2, 400);
	  });

    $('.link-telezki a').click(function(){
        var link = this;
        setTimeout(function(){
            var curCarouuselIndx = $(link)[0].hash.substring($(link)[0].hash.indexOf("l")+1);
            var curCarousel = $(".telezki_vid_slaider").find("#panel" + curCarouuselIndx);

            var itemsCount = curCarousel.find('div.owl-stage').find('div.owl-item').length;
            var indxActiveDot = curCarousel.find('.owl-dot.active').index();

            var owl_items = curCarousel.find('div.owl-stage').find('div.owl-item');
            var vis_owl_items = [];
            for(var oi = 0; oi < owl_items.length; oi++){
                if(!$(owl_items[oi]).hasClass('cloned')){
                    vis_owl_items.push(owl_items[oi]);
                }
            }
            $(vis_owl_items).removeClass("active");
            $(vis_owl_items[indxActiveDot]).addClass("active");
            var indxNewActive = $(vis_owl_items[indxActiveDot]).index();

            $(".telezki_vid_slaider").find(".owl-stage").width($(".owl-item").width() * (itemsCount));
            curCarousel.find(".owl-stage").css("transform", "translate3d("+(-indxNewActive*$(".owl-item").width())+"px, 0px, 0px)");
        }, 400);
        setOptionSlider()
	  });

    $( window ).resize(function() {
        setTimeout(function(){
            var w2 = $(".telezki_vid_slaider").width();
            $(".telezki_vid_slaider").find(".owl-item").width(w2);
            var itemsCount = $(".telezki_vid_slaider").find(".tab-pane.active").find('div.owl-stage').find('div.owl-item').length;
            var indxActive = $(".telezki_vid_slaider").find(".tab-pane.active").find('div.owl-stage').find('div.active').index();
            $(".telezki_vid_slaider").find(".owl-stage").width($(".owl-item").width() * (itemsCount));
            $(".telezki_vid_slaider").find(".tab-pane.active").find(".owl-stage").css("transform", "translate3d("+(-indxActive*$(".owl-item").width())+"px, 0px, 0px)");
        }, 500)
    });



    function setOptionSlider(){
        $(".telezki_vid_slaider").find(".owl-dot").click(function(event){
            event.preventDefault();
            event.stopPropagation();
            $(".telezki_vid_slaider").find(".owl-stage").addClass("owl-stage-animation");
            var indexItem = $(this).index();
            var owl_items = $(".telezki_vid_slaider").find(".tab-pane.active").find('div.owl-stage').find('div.owl-item');
            var vis_owl_items = [];
            for(var oi = 0; oi < owl_items.length; oi++){
                if(!$(owl_items[oi]).hasClass('cloned')){
                    vis_owl_items.push(owl_items[oi]);
                }
            }
            $(vis_owl_items).removeClass("active");
            $(vis_owl_items[indexItem]).addClass("active");
            $(this).parent().find(".owl-dot").removeClass("active");
            $(this).addClass("active");
            $(".telezki_vid_slaider").find(".tab-pane.active").find(".owl-stage").css("transform", "translate3d("+(-($(this).index() + 2)*$(".owl-item").width())+"px, 0px, 0px)");
        })
    }


	  function slid2(){
	    $(".owl-carousel.product2").owlCarousel({
				items: 1,
			  loop: true,
			  autoplay: false,
			  smartSpeed: 500,
				autoplayHoverPause: true,
			  pagination: true,
		    mouseDrag: false,
			  nav: false
	    });
	  };

		//Фэнсибокс
		$("a.fancyimage").fancybox();
		$(".one_otz").find('a').attr('rel','group_1');
		$(".oneSert").find('a').attr('rel','group_2');

		//Подсказки
		$('.show').click(function() {
			$(this).toggleClass('new_color');
		  $(this).closest('.one_vopr').find('.info').toggle('slow');
		});

		//Переход по якорям
		$(".menu_jk a").click(function () {
	      var elementClick = $(this).attr("href")
	      var destination = $(elementClick).offset().top;
	      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 57}, 800);
	      return false;
	  });

		//Модалки
		$(".callBack, .submit_footer").click(function() {
			$("#modal_tel").modal('show');
		});
		$(".submit_price_tab, .submit_price_proizvodstvo, .submit_block_10").click(function() {
			$("#modal_price").modal('show');
		});

		//Проектирование-производство
		if(document.documentElement.clientWidth > 768) {
			$(".proektirovanie_proizvodstvo .h2").click(function() {
				$(".proektirovanie_proizvodstvo").toggleClass('pp_none');
				$(".proektirovanie_proizvodstvo").toggleClass('pp_block');
			});

			$(".proektirovanie_proizvodstvo .h2").click(function(){
		    setTimeout(sl, 300);
		  });
			function sl(){
				$(".owl-carousel.slider_proizvodstvo_1").owlCarousel({
					items: 1,
				  loop: true,
				  autoplay: false,
				  smartSpeed: 500,
					autoplayHoverPause: true,
				  pagination: true,
			    mouseDrag: false,
				  nav: true,
					navText: ["&#8249;", "&#8250;"],
				});
			};
		}
		else {
			$(".owl-carousel.slider_proizvodstvo_1").owlCarousel({
				items: 1,
			  loop: true,
			  autoplay: false,
			  smartSpeed: 500,
				autoplayHoverPause: true,
			  pagination: true,
		    mouseDrag: false,
			  nav: true,
				navText: ["&#8249;", "&#8250;"],
			});
		};

		//Фиксированное меню
		if(document.documentElement.clientWidth > 768) {
			var shir = $('header').css('height');
			var shir = parseInt(shir, 10);
			console.log(shir);
			$(window).scroll(function(){
				if($(this).scrollTop() >= shir - 150) {
					$('.headerBottom').addClass('menuFix');
				}
				else {
					$('.menuFix').removeClass('menuFix');
				}
			});
		};

		//Бургер
		$(".navbar-toggle").click(function() {
			$(".menu_jk").toggleClass('menu_jk_add');
			$('.navbar-toggle .icon-bar:nth-of-type(1)').toggleClass('bar_1');
			$('.navbar-toggle .icon-bar:nth-of-type(2)').toggleClass('bar_2');
			$('.navbar-toggle .icon-bar:nth-of-type(3)').toggleClass('bar_3');
		});

		

		$('a[href="#panel2"]').click(function(){ 
	setTimeout(slid2, 400); 
	}); 
	function slid2(){ 
	$(".owl-carousel.product2").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		}; 

		$('a[href="#panel3"]').click(function(){ 
	setTimeout(slid3, 400); 
	}); 
	function slid3(){ 
	$(".owl-carousel.product3").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		}; 

		$('a[href="#panel4"]').click(function(){ 
	setTimeout(slid4, 400); 
	}); 
	function slid4(){ 
	$(".owl-carousel.product4").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		}; 

		$('a[href="#panel5"]').click(function(){ 
	setTimeout(slid5, 400); 
	}); 
	function slid5(){ 
	$(".owl-carousel.product5").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		}; 

		$('a[href="#panel6"]').click(function(){ 
	setTimeout(slid6, 400); 
	}); 
	function slid6(){ 
	$(".owl-carousel.product6").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		}; 

		$('a[href="#panel7"]').click(function(){ 
	setTimeout(slid7, 400); 
	}); 
	function slid7(){ 
	$(".owl-carousel.product7").owlCarousel({ 
	items: 1, 
	loop: true, 
	autoplay: false, 
	smartSpeed: 500, 
	autoplayHoverPause: true, 
	pagination: true, 
	mouseDrag: false, 
	nav: false 
	}); 
		};



});

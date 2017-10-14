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

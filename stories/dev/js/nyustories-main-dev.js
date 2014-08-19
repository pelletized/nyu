//only use these functions if the nav exists
if($('.stories-main-nav-wrap').length) {

	//sticky nav 
	//delayed to allow alerts to load, if needed
	setTimeout(function() { 
		var stickyNav = $('.stories-main-nav-wrap').offset().top;						
		stickyNav = stickyNav - 75; //adjust for smoother transition
		var positionTopAbs, positionTopFixed;
		
		//if alerts exist on the page, move nav down below
		if ($('#alerts').length) {
			positionTopAbs = '330px';
			positionTopFixed = '25px';			
		} else {
			positionTopAbs = '250px';
			positionTopFixed = '25px';			
		}
		
		$('.stories-main-nav-wrap').css({top: positionTopAbs});		
		$(window).scroll(function(){
			if( $(window).scrollTop() > stickyNav ) {
				$('.stories-main-nav-wrap').css({position: 'fixed', top: positionTopFixed});
			} else {				
				$('.stories-main-nav-wrap').css({position: 'absolute', top: positionTopAbs});
			}
		});
		
	}, 1000);			

	//if directly linked to a section, add active class to navbar
	(function() {	
		if (window.location.hash == "#articles") {
			$(".nav-articles").addClass("active");				
		} 
		
		else if (window.location.hash == "#videos") {
			$(".nav-videos").addClass("active");		
		} 	
		
		else if (window.location.hash == "#slideshows") {
			$(".nav-slideshows").addClass("active");		
		} 	
		
		else {
			$('.stories-main-nav .active').removeClass('active');
		}	
	})();


	//jump links in nav
	$('a[href*=#]:not([href=#])').on("click", function() {	
		$('.stories-main-nav .active').removeClass('active');
		$(this).addClass('active');

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $(target);
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top
				}, 1000);
			}
		}	
	});

	//scrolling adds/removes active class on navbar
	(function() {	
	var articles = $("a[name='articles']").offset().top - 30;
	var videos = $("a[name='videos']").offset().top - 30;
	var slideshows = $("a[name='slideshows']").offset().top - 30;
	
	
		$(window).scroll(function(){		
			var scroll = $(window).scrollTop();
					
			if ((scroll > articles) && (scroll < videos - 50)) {
				$('.stories-main-nav .active').removeClass('active');
				$('.stories-main-nav .nav-articles').addClass('active');			
			} 
			else if ((scroll > videos) && (scroll < slideshows - 50)) {
				$('.stories-main-nav .active').removeClass('active');
				$('.stories-main-nav .nav-videos').addClass('active');
			}
			
			else if (scroll > slideshows) {
				$('.stories-main-nav .active').removeClass('active');
				$('.stories-main-nav .nav-slideshows').addClass('active');
			}
			
			else {
				$('.stories-main-nav .active').removeClass('active');
			}	
			
		});

	}) ();


}

//truncate and add ellipses to promo boxes at the bottom of cat and story pages
//delayed start for cq to catch up
setTimeout(function() { 	
	$('.link-content').dotdotdot({
		height: 150,
		after: 'span.pink'
	});
}, 500);
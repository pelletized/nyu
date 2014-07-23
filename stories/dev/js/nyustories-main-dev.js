//only use these functions if the nav exists
if($('.stories-main-nav-wrap').length) {

	//sticky nav
	(function() {
		var stickyNav = $('.stories-main-nav-wrap').offset().top;	
		stickyNav = stickyNav - 30; //adjust for smoother transition	
		$(window).scroll(function(){
			if( $(window).scrollTop() > stickyNav ) {
				$('.stories-main-nav-wrap').css({position: 'fixed', top: '25px'});
			} else {
				$('.stories-main-nav-wrap').css({position: 'absolute', top: '245px'});
			}
		});

	})();

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

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

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
	var articles = $('#articles').offset().top - 30;
	var videos = $('#videos').offset().top - 50;
	var slideshows = $('#slideshows').offset().top - 50;

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
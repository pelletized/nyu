$(document).ready(function(){
	ngnToggleTray();	
});

function ngnToggleTray() {
	// TODO: this should be it's own function
	$("#ngn .ngn-tray, #ngn #ngnSearch").hide();	
	
	$("#ngn .btn-search").on("click", function(e) {
		$(this).hide();
		
		$("#ngn .ngn-search-box").animate({
			"margin-left":"0",
			"width":"68%"			
		}, 700);
		$("#ngn #ngnSearch").show();
		e.preventDefault();
		
	});
	
	var $width = $(window).width();	
	console.log("hey hey " + $width);	
	$("#ngn #tray-toggle").on("click", function() {			
		
		if ($width < 480) {
			$("#ngn .ngn-tray").slideToggle(1000, "linear");	
		} else {
			$("#ngn .ngn-tray").slideToggle(1000, "linear");	
			$("#ngn #tray-toggle").toggleClass("btn-more");
			$("#ngn #tray-toggle").toggleClass("btn-less");	
		}
	});
}
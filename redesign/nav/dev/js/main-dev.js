$(document).ready(function(){
	toggleTray();	
});

function toggleTray() {
	$("#ngn .ngn-tray").hide();	
	
	$("#ngn .btn-search").on("click", function() {
		$(this).hide();
		//$(this).css('opacity','0');
		$("#ngn .ngn-search-box").animate({
			"margin-left":"0",
			"width":"68%"
			//"width":"toggle"
		}, 1000);	
	});
	
	$("#ngn #tray-toggle").on("click", function() {			
		$("#ngn .ngn-tray").slideToggle(1000, "linear");	
		$("#ngn #tray-toggle").toggleClass("btn-more");
		$("#ngn #tray-toggle").toggleClass("btn-less");	
	});
}
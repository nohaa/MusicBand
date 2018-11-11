$(document).ready(function(){
	$('nav .nav-item:not(:last-child) a.nav-link').on('click',function(event){
		event.preventDefault();
		let secId = $(this).attr('data-value'); 
		$('body,html').animate({
			scrollTop : $('#'+secId).offset().top
		},500);
	});
	
	$('.navbar-nav .nav-item:last-child .nav-link').on('click',function(event){
		event.preventDefault();
		 
		$('.searchBox').fadeToggle();
	 
	}); 
	
	
});
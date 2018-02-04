/************** Header sticky *********************/

jQuery(document).ready(function() {
var $window = jQuery(window);
$window.scroll(function(){
	if ($window.scrollTop() >= 130) {
		
	//jQuery('.top-header').addClass('hide_div');
	jQuery('header').addClass('scrolldown');
	
} else {
   //jQuery('.top-header').removeClass('hide_div');
   jQuery('header').removeClass('scrolldown');
}
});
});

/************** Header sticky *********************/

/************** Scroll Up *********************/

jQuery(document).ready(function(){ 

	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollup').fadeIn();
		} else {
			jQuery('.scrollup').fadeOut();
		}
	}); 

	jQuery('.scrollup').click(function(){
		jQuery("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

});

/************** Scroll Up *********************/
/*!!***************************************
This is a simple jQuery Plugin that can eaisly allow user to equalize height the elements.
There are 1 function in this plugin.

.equalHeight();

i.e.  $(element).equalHeight();
******************************************/

(function($){

jQuery.fn.equalHeight = function () {
	
	var element_number = $('[getHeight=true]', this).length;
	var max_height = 0;
	
	$('[getHeight=true]', this).each(function(){
		var container_height = $(this).height();
		max_height = Math.max(container_height, max_height);
	});
	
	$('[setHeight=true]', this).each(function(){
		$(this).height(max_height); //for old browser
		
		container_height = max_height + "px";
		$(this).each(function () {
			this.style.setProperty( 'height', container_height, 'important' );
		});
	});
	
	return $(this);
}

})(jQuery);
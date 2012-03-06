(function($) {
	
	var interval = 10000;

	$(document).ready(function(e) {
	
		// get things off the ground
		window.setTimeout(runUpdate, interval);
	});
	
	runUpdate = function() {
	
		var $wrapper = $('wrapper');
		
		$.get(window.location, function(data, status, xhr) {
		
			var $data = $(data);
			
			// update the page
			$wrapper.html($data.find('#wrapper').html());
			
			// set a new timeout
			window.setTimeout(runUpdate, interval);
			
		}, 'html');
	};

})(jQuery);
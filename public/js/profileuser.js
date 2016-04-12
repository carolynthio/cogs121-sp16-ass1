'use strict'


$(document).ready(function() {
	  initializePage();
});



    function initializePage() {

    	function(data) {
    		var parsedData;
		    // grab and parse data and assign it to the parsedData variable.
		    parsedData = {
		      'user': {
		        'photo': data.user.photos[0].value,
		        'username': data.user.username
		      	},

			$("#userImage").attr("src", parsedData.user.photo);
			$(".username").html(parsedData.user.username);
		}

	}
};
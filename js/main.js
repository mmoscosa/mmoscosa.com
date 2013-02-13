$(document).ready(function() {
	$('#content-for-layout').load('views/home.php');
	function checkSize() {
	    //small-screen
	    if (window.innerWidth < 1025) {
	        $('.passion').removeClass('metro');
	    }else{
			$('.passion').addClass('metro');
	    }
	    //end small-screen
	}

	checkSize();

	$(window).resize(function() {
	    checkSize();
	});
});

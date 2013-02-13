function resetNav() {
	$('#nav-home').removeClass('active');
	$('#nav-blog').removeClass('active');
}

function loadHome() {
	$('#modal').hide();
	$('#content-for-layout').load('views/home.php', function() {
		$('#nav-home').addClass('active');
	});
}
function loadBlog() {
	$('#submenu').load('views/blog/index.php', function() {
		$('#nav-blog').addClass('active');
	});
}
function showModal() {
	var height = $(document.body).height();
	$('#modal').css('height', height);
	$('#modal').show(function(){
		$('#nav-blog').addClass('active');
	});
}

function checkSize() {
    //small-screen
    if (window.innerWidth < 1025) {
        $('.passion').removeClass('metro');
    }else{
		$('.passion').addClass('metro');
    }
    //end small-screen
}

$(window).resize(function() {
    checkSize();
});

$(document).ready(function() {
	checkSize();
	loadHome();
	$('#modal').click(function(){
		resetNav();
		loadHome();
	});

	//NAVBAR
	$('#nav-home').click(function(){
		resetNav();
		loadHome();
	});
	$('#nav-blog').click(function(){
		resetNav();
		showModal();
		loadBlog();
	});
});

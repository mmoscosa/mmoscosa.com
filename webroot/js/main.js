function resetNav() {
	$('#nav-home').removeClass('active');
	$('#nav-blog').removeClass('active');
	$('#nav-photos').removeClass('active');
	$('#nav-portfolio').removeClass('active');
	$('#nav-contact').removeClass('active');
}

function loadHome() {
	$('#modal').hide();
	$('#nav-home').addClass('active');
	$('#content-for-layout').load('/pages/home #home');
}
function showModal() {
	$('#modal').show();
}

function loadBlog() {
	$('#submenu').load('/blog', function() {
		showModal();
		$('.icon-spinner').hide();
	});
}

function loadContact() {
	$('#submenu').load('views/contact/index.php', function() {
		showModal();
		$('.icon-spinner').hide();
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
	//loadHome();
	// $('#modal').click(function(){
	// 	resetNav();
	// 	loadHome();
	// });

	//NAVBAR
	$('#nav-home').click(function(){
		resetNav();
		loadHome();
		return false;
	});
	$('#nav-blog').click(function(){
		resetNav();
		$(this).addClass('active');
		$(this).append('<i class="icon-spinner icon-spin"></i>');
		loadBlog();
		return false;
	});
	$('#nav-contact').click(function(){
		resetNav();
		$(this).addClass('active');
		$(this).append('<i class="icon-spinner icon-spin"></i>');
		loadContact();
		return false;
	});
});

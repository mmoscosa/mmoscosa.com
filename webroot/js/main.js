function resetNav() {
	$('#nav-home').removeClass('active');
	$('#nav-blog').removeClass('active');
	$('#nav-photos').removeClass('active');
	$('#nav-portfolio').removeClass('active');
	$('#nav-contact').removeClass('active');
	$('#submenu').hide();
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
		$('.icon-spinner').hide();
		$('#submenu').show();
	});
}

function loadContact() {
	$('#submenu').load('/contact', function() {
		$('.icon-spinner').hide();
		$('#submenu').show();
	});
}


$(document).ready(function() {
	loadHome();

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
		showModal();
		loadBlog();
		return false;
	});
	$('#nav-contact').click(function(){
		resetNav();
		$(this).addClass('active');
		$(this).append('<i class="icon-spinner icon-spin"></i>');
		showModal();
		loadContact();
		return false;
	});
});

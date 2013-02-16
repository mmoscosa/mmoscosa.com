function resetNav() {
	$('#nav-home').removeClass('active');
	$('#nav-blog').removeClass('active');
	$('#nav-photos').removeClass('active');
	$('#nav-portfolio').removeClass('active');
	$('#nav-contact').removeClass('active');
	$('#modal').hide();
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

function loadPortfolio() {
	$('#submenu').load('/portfolio', function() {
		$('.icon-spinner').hide();
		showModal();
		$('#submenu').show();
	});
}

function loadBlog() {
	$('#submenu').load('/blog', function() {
		$('.icon-spinner').hide();
		showModal();
		$('#submenu').show();
	});
}

function loadPhotos() {
	$('#submenu').load('/photos', function() {
		$('.icon-spinner').hide();
		showModal();
		$('#submenu').show();
	});
}

function loadContact() {
	$('#submenu').load('/contact', function() {
		$('.icon-spinner').hide();
		showModal();
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
	$('#nav-portfolio').click(function(){
		resetNav();
		$(this).addClass('active');
		$(this).append('<i class="icon-spinner icon-spin"></i>');
		loadPortfolio();
		return false;
	});
	$('#nav-photos').click(function(){
		resetNav();
		$(this).addClass('active');
		$(this).append('<i class="icon-spinner icon-spin"></i>');
		loadPhotos();
		return false;
	});
});

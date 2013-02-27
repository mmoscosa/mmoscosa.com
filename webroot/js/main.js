$(document).ready(function() {
	$("a.responsive-nav").pageslide({modal:true});
	var content, home, blog, portfolio, photos, contact, modal, submenu, spinner, spinnerAppend, mouse_is_inside;
	content = $('#content-for-layout');
	home = $('#nav-home');
	blog = $('#nav-blog');
	portfolio = $('#nav-portfolio');
	photos = $('#nav-photos');
	contact = $('#nav-contact');
	modal = $('#modal');
	submenu = $('#submenu');

		spinner = $('.icon-spinner');
		spinnerAppend = '<i class="icon-spinner icon-spin"></i>';

	$('.dropdown-toggle').dropdown();
	function loadHome() {
		modal.hide();
		home.addClass('active');
		content.load('/pages/home #home');
	}

	if(window.location.pathname === '/'){
		loadHome();
		//NAVBAR
		home.click(function(){
			resetNav();
			loadHome();
			return false;
		});
	}else if(window.location.pathname === '/blog'){
		spinner.hide();
	}else if(window.location.pathname === '/portfolio'){
		spinner.hide();
	}else if(window.location.pathname === '/photos'){
		spinner.hide();
	}else if(window.location.pathname === '/contact'){
		spinner.hide();
	}


	function resetNav() {
		home.removeClass('active');
		blog.removeClass('active');
		portfolio.removeClass('active');
		photos.removeClass('active');
		contact.removeClass('active');
		modal.hide();
		submenu.hide();
		spinner.hide();
	}

	function loadSubmenu(){
		$('.icon-spinner').hide();
		submenu.fadeTo("slow", 1);
	}

	function activate(section){
		section.addClass('active');
		section.append(spinnerAppend);
		modal.fadeTo('fast', 1, function(){
			$(this).trigger('isVisible');
		});
	}

	function loadBlog() {
		activate(blog);
		submenu.load('/blog/ajax', function() {
			loadSubmenu();
		});
	}

	function loadPortfolio() {
		activate(portfolio);
		submenu.load('/portfolio/ajax', function() {
			loadSubmenu();
		});
	}

	function loadPhotos() {
		activate(photos);
		submenu.load('/portfolio/ajax', function() {
			loadSubmenu();
		});
	}

	function loadContact() {
		activate(contact);
		submenu.load('/contact/ajax', function() {
			loadSubmenu();
		});
	}


	blog.click(function(){
		resetNav();
		loadBlog();
		return false;
	});

	contact.click(function(){
		resetNav();
		loadContact();
		return false;
	});
	portfolio.click(function(){
		resetNav();
		loadPortfolio();
		return false;
	});
	photos.click(function(){
		resetNav();
		loadPhotos();
		return false;
	});

	function isVisible(){
		submenu.hover(function(){
			mouse_is_inside=true;
		},function(){
			mouse_is_inside=false;
		});

		$('body').mouseup(function(){
			if(!mouse_is_inside){
				resetNav();
				loadHome();
			}
		});
	}

	modal.bind('isVisible',isVisible);
});

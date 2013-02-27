<!DOCTYPE html>
<html lang="en">
<head>
	<?php echo $this->Html->charset(); ?>
	<title>mmoscosa</title>

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="apple-touch-fullscreen" content="yes" />

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('pageslide');
		echo $this->Html->css('main');
		echo $this->Html->script('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
		echo $this->Html->script('bootstrap-dropdown');
		echo $this->Html->script('bootstrap-tooltip');
		echo $this->Html->script('bootstrap-popover');
		echo $this->Html->script('bootstrap-transition');
		echo $this->Html->script('main-ck');
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>

</head>
<body>
	<div id="modal">
		<div id="submenu">
		</div>
	</div>
	<div id="responsive-menu">
		<div class="navbar navbar-inverse" id="navigation-responsive">
		  <div class="navbar-inner">
		    <div class="container">
		    	<?php
					$email = "mmoscosa@gmail.com";
					$grav_url = "http://www.gravatar.com/avatar/" . md5( strtolower( trim( $email ) ) );
				?>
				<img src="<?php echo $grav_url;?>" alt="gravatar" title="Martin Moscosa" class="img-rounded"/>
		    	<a class="brand" href="#">Martin Moscosa</a>
		    </div>
		  </div>
		</div>

		<nav>
			<ul>
				<a href="/"><li id="nav-home-responsive" class="first"><i class="icon-home"></i>Home</li></a>
				<a href="/portfolio"><li id="nav-portfolio-responsive"><i class="icon-briefcase"></i>Portfolio</li></a>
				<!-- <a href="#"><li id="nav-photos">Photos</li></a> -->
				<a href="/blog"><li id="nav-blog-responsive"><i class="icon-comment"></i>Blog</li></a>
				<a href="/contact"><li id="nav-contact-responsive"><i class="icon-envelope-alt"></i>Contact</li></a>
			</ul>
		</nav>
	</div>
	<div class="navbar navbar-fixed-top hidden-desktop" id="responsiv-nav">
	  <div class="navbar-inner">
	    <div class="container">

	      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
	      <a class="btn btn-navbar responsive-nav left" href="#responsive-menu">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </a>
	      <a class="btn right dropdown-toggle"  data-toggle="dropdown" id="cv-responsive" href="#"><i class="icon-file"></i></a>
	      <ul id="cv" class="dropdown-menu" role="menu" >
                  <li><a role="menuitem" tabindex="-1" href="http://dl.dropbox.com/u/54926/CV/Martin%20Moscosa%20CV%20%5BEnglish%5D.pdf"><i class="icon-download-alt"></i> CV (PDF)</a></li>
                  <li class="divider"></li>
                  <li><a role="menuitem" tabindex="-1" href="http://vizualize.me/mmoscosa#.URrin1rfzwM">CV (Infographic)</a></li>
                </ul>
	    </div>
	  </div>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span3 well visible-desktop" id="navigation">
				<div id="idCard">
					<?php
						$email = "mmoscosa@gmail.com";
						$grav_url = "http://www.gravatar.com/avatar/" . md5( strtolower( trim( $email ) ) );
					?>
					<img src="<?php echo $grav_url;?>" alt="gravatar" title="Martin Moscosa" class="img-circle avatar"/>
					<h1>Martin Moscosa</h1>
					<p>Web Project Manager & Developer. <!-- <br/><span>Seeking new and challenging opportunities</span> --></p>
					<ul id="social">
						<li><a href="http://twitter.com/mmoscosa" target="_blank" title="Twitter mmoscosa"><i class="icon-twitter"></i></a></li>
						<li><a href="https://www.linkedin.com/in/mmoscosa" target="_blank" title="LinkedIn Martin Moscosa"><i class="icon-linkedin"></i></a></li>
						<li><a href="https://www.facebook.com/mmoscosa.web" target="_blank" title="Facebook mmoscosa"><i class="icon-facebook"></i></a></li>
						<li><a href="http://pinterest.com/mmoscosa/" target="_blank" title="Pinterest mmoscosa"><i class="icon-pinterest"></i></a></li>
						<li><a href="https://github.com/mmoscosa" target="_blank" title="Github mmoscosa"><i class="icon-github-alt"></i></a></li>
						<li><a href="https://plus.google.com/u/0/114388949394787888641" target="_blank" title="Google+ mmoscosa"><i class="icon-google-plus"></i></a></li>
					</ul>
				</div>
				<nav>
					<ul>
						<a href="/"><li id="nav-home" class="first">Home</li></a>
						<a href="#"><li id="nav-portfolio">Portfolio</li></a>
						<!-- <a href="#"><li id="nav-photos">Photos</li></a> -->
						<a href="#"><li id="nav-blog">Blog</li></a>
						<a href="#"><li id="nav-contact">Contact</li></a>
					</ul>
				</nav>
				<footer>
					<small>mmoscosa.com &copy; <?php echo date('Y');?></small>
				</footer>
			</div>
			<div class="span8 offset3">
				<div id="content-for-layout">
					<div class="loading">
						<i class="icon-spinner icon-spin icon-4x"></i>
					</div>
					<?php echo $this->Session->flash(); ?>
					<?php echo $this->fetch('content'); ?>
				</div>
			</div>
		</div>
	</div>
	<footer class="main hidden-desktop">
		<small>mmoscosa.com &copy; <?php echo date('Y');?></small>
	</footer>
	<script type="text/javascript">
		$('a').tooltip();
	</script>
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-38603874-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
	<script src="/js/jquery.pageslide.min.js"></script>
	<script>
		var responsiveMenu,cvButton;
		cvButton = $('#cv-responsive');
		responsiveMenu = $("a.responsive-nav");
    	responsiveMenu.click(function(){
    		cvButton.toggle();
    	});
    	responsiveMenu.pageslide({modal:true});
	</script>
	<?php echo $this->element('sql_dump'); ?>
</body>
</html>

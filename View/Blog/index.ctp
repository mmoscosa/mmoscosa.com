<div id="blog">
	<span>mmoscosa's blog</span>
	<a href="http://mmoscosa.posterous.com/" target="_blank"><img src="img/posterous-logo.jpg" alt="posterous logo" /></a>
	<p>
		Not very often, but every now and then you will see an update here with one or two thoughts about everything and nothing.
		<ul id="info" class="well">
			<li>Showing <span><?php echo $info['Shown'];?></span></li>
			<li>out of <span><?php echo $info['Total'];?></span> posts</li>
			<?php if($info['Shown'] < $info['Total']): ?>
				<li> | <a href="http://mmoscosa.posterous.com/" target="_blank">more</a>.</li>
			<?php else: ?>
				<li>.</li>
			<?php endif; ?>
		</ul>
	</p>
</div>

<script type="text/javascript">
	$('a').tooltip();
</script>

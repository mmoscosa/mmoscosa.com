<div id="blog">
	<span>mmoscosa's blog</span>
	<a href="http://mmoscosa.posterous.com/" target="_blank"><img src="img/posterous-logo.jpg" alt="posterous logo" /></a>
	<p>
		Not very often, but every now and then you will see an update here with one or two thoughts about everything and nothing.
		<ul id="info" class="well">
			<li>Showing <span><?php echo $posts['Total'];?></span> posts.</li>
		</ul>
	</p>
	<ul id="posts">
		<?php foreach ($posts['Post'] as $key => $post):?>
			<li>
				<?php	echo $this->Html->link($post['title'], $post['url'], array('target'=>'_blank', 'title'=>$post['title']));?>
			</li>
		<?php endforeach; ?>
	</ul>
</div>

<script type="text/javascript">
	$('a').tooltip();
</script>

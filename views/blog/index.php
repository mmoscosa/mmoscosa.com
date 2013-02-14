<?php
function getFeed($feed_url) {
	$content = file_get_contents($feed_url);
	$x = new SimpleXmlElement($content);
	$posts = count($x->channel->item);
	$i = 0;
	echo "<ul id='posts'>";
	foreach($x->channel->item as $entry) {
		if($i>=100){continue;}
		echo "<li><a href='$entry->link' target='_blank' title='$entry->title'>" . $entry->title . "</a></li>";
		$i++;
	}
	echo "</ul>";
	$info = array('Total' => $posts, 'Shown' => $i );
	return $info;
}
?>

<div id="blog">
	<span>mmoscosa's blog</span>
	<a href="http://mmoscosa.posterous.com/" target="_blank"><img src="img/posterous-logo.jpg" alt="posterous logo" /></a>
	<?php $info = getFeed("http://mmoscosa.posterous.com/rss.xml"); ?>
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

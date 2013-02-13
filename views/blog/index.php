<?php
function getFeed($feed_url) {
	$content = file_get_contents($feed_url);
	$x = new SimpleXmlElement($content);
	echo "<ul id='posts'>";
	foreach($x->channel->item as $entry) {
		echo "<li><a href='$entry->link' title='$entry->title'>" . $entry->title . "</a></li>";
	}
	echo "</ul>";
}
?>

<div id="blog">
	<span>mmoscosa's blog</span>
	<?php echo $i; ?>

	<?php getFeed("http://mmoscosa.posterous.com/rss.xml"); ?>
</div>

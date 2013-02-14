<?php
App::uses('AppController', 'Controller');
class BlogController extends AppController {

	public $name = 'Blog';
    public $helpers = array('Html');
	public $components = array('Posterous', 'Session');

    public function index() {
    	$posts = $this->posterous->get_posts();
        $total = count($posts);
        print_r($total);
        pr($posts);
        die();
    	foreach ($posts as $post){
    		$post_id = $post->id;
    		break;
    	}
		$this->set(compact('posts'));
    }
}

<?php
App::uses('AppController', 'Controller');
class BlogController extends AppController {

	public $name = 'Blog';
    public $helpers = array('Html');
	public $components = array('Posterous', 'Session');

    public function index() {
        $posts = array();
    	$posterous = $this->posterous->get_posts();
        foreach ($posterous as $key => $post) {
            $posts['Post'][$key]['title'] = $post->title;
            $posts['Post'][$key]['url'] = $post->short_url;
        }
        $total = count($posterous);
            $posts['Total'] = $total;
		$this->set(compact('posts'));
    }

    public function ajax(){
        $this->layout = 'ajax';
        $this->index();
    }
}

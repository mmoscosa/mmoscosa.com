<?php
App::uses('AppController', 'Controller');
class PortfolioController extends AppController {
	public $name = 'Portfolio';

	public function index(){

	}

	public function ajax(){
		$this->layout = 'ajax';
		$this->index();
	}
}

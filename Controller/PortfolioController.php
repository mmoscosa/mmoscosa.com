<?php
App::uses('AppController', 'Controller');
class PortfolioController extends AppController {
	public $name = 'Portfolio';

	public function index(){
		$this->layout = 'ajax';
	}
}

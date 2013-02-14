<?php
class ContactController extends AppController {

	public $name = 'Contact';
	public $helpers = array('Html', 'Form');
    public $components = array('Email');

	public function index(){
		$this->layout = 'ajax';
		if(!empty($this->data)){
			if(!empty($this->data['Contact']['honey'])){
				$this->Session->setFlash('Please try again and check input provided.');
				$this->redirect(array('action' => 'index'));
			}
			if($this->Contact->validates()){
				$this->Email->to = 'mmoscosa@gmail.com';
				$this->Email->replyTo = $this->data['Contact']['email'];
				$this->Email->from = $this->data['Contact']['name']."<".$this->data['Contact']['email'].">";
				$this->Email->subject = 'Contact Form [mmoscosa]';

				//$this->Email->delivery = 'debug';

				if ($this->Email->send($this->data['Contact']['message'])) {
					$this->Session->setFlash('Thank you for contacting me, I will get in touch shortly.');
					$this->redirect(array('controller' => 'pages', 'action' => 'display'));
				} else {
					$this->Session->setFlash('There was an error sending your email, please try again.');
				}
					$this->redirect(array('controller' => 'pages', 'action' => 'display'));
				} else {
					$this->Session->setFlash('Please try again and check input provided.');
					$this->redirect(array('controller' => 'pages', 'action' => 'display'));
				}
		}
	}
}

<?php

/**
 * Posterous Component
 * @author mmoscosa
 * @uses Posterous API Library for PHP 5 
 * @version 0.1 
 */


class PosterousComponent extends Component
{
    /**
     * Api Key. Change to your own
     * @var string
     * @link http://www.flickr.com/services/api/misc.api_keys.html
     */
    //public $_api_key='7908af8c97bd3667738498886caa9b2f';

    function startup(&$controller)
    {
        App::import('Vendor', 'posterous', array('file' => 'posterous'.DS.'posterous.php'));
    
        //FlickrComponent instance of controller is replaced by a phpFlickr instance 
         $controller->posterous = new PosterousAPI();
         
         $controller->set('posterous',$controller->posterous);
    }
}
?>
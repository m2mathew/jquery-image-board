'use strict';

$(document).ready(function(){

    // target elements needed
    var $imageUrl = $('#image-url');
    var $imageCaption = $('.image-caption');
    var $form = $('form');
    var $cancelButton = $('#cancel-button');
    var $gallery = $('#gallery');
    var url = 'http://tiyfe.herokuapp.com/collections/mike_m_jquery_image_board';

    // Initialize material box for picture viewing
    $('.materialboxed').materialbox();

    $form.submit(function(e) {
        e.preventDefault();

        $imageUrl.val('');
        $imageCaption.val('');
        $imageCaption.trigger('autoresize');



    });




});

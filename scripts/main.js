'use strict';

$(document).ready(function(){

    // target elements needed
    var $imageUrl = $('#image-url');
    var $imageCaption = $('.image-caption');
    var $form = $('form');
    var $cancelButton = $('#cancel-button');
    var $gallery = $('#gallery');
    var $deleteAllButton = $('#delete-all-button');
    var url = 'http://tiyfe.herokuapp.com/collections/mike_m_images/';

    // Initialize material box for picture viewing
    $('.materialboxed').materialbox();

    // $.click(function() {
    //     $form.toggle();
    // })

    // function to show images in gallery
    var displayGallery = function() {
        $imageUrl.val('');
        $imageCaption.val('');
        $gallery.html('');

        $.get(
            url,
            function(response){
                response.forEach(function(response, index) {
                    var newString = '<div id="photo-box"><img class="materialboxed" data-caption="' + response.caption + '" src="' + response.url + '"><p>' + response.caption + '</p></div>';
                    $gallery.append(newString);
            }),
            'json'
        });
    };

    // call function to start page with current gallery images
    displayGallery();

    // actions that happen when form is submitted
    $form.submit(function(e) {
        e.preventDefault();

        var newUrl = $imageUrl.val();
        var newCaption = $imageCaption.val();

        $.post(
                url,
                {
                    url: newUrl,
                    caption: newCaption
                },
                displayGallery,
                'json'
            );
    });


    // function to Delete All pictures from the server
    function onDeleteAll() {
        $.get(
            url,
            function (response) {
                response.forEach(function(record) {
                    var newUrl = url + record._id;
                    $.ajax({
                        url: newUrl,
                        method: 'DELETE'
                    });
                });
            },
            'json'
        );
        $imageUrl.val('');
        $imageCaption.val('');
        $gallery.html('');
    }

    $deleteAllButton.click(onDeleteAll);

});

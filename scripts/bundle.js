(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    // target elements needed
    var $imageUrl = $('#image-url');
    var $imageCaption = $('.image-caption');
    var $errorUrl = $('#error-url');
    var $errorCaption = $('#error-caption');
    var $toggleButton = $('.toggle-button');
    var $toggleIcon = $('#toggle-icon');
    var $bigFormBox = $('.form-big-box');
    var $form = $('form');
    var $cancelButton = $('#cancel-button');
    var $galleryBox = $('.gallery-box');
    var $gallery = $('#gallery');
    var $deleteAllButton = $('#delete-all-button');
    var url = 'http://tiyfe.herokuapp.com/collections/mike_m_image_board/';

    // Initialize material box for picture viewing
    $('.materialboxed').materialbox();

    // toggles the form element to show or hide
    $toggleButton.click(function () {
        if ($toggleIcon.html() === 'expand_more') {
            $toggleIcon.html('expand_less');
            $bigFormBox.show(200);
        } else if ($toggleIcon.html() === 'expand_less') {
            $toggleIcon.html('expand_more');
            $bigFormBox.hide(200);
        }
    });

    // cancel button clears input fields
    $cancelButton.click(function () {
        $imageUrl.val('');
        $imageCaption.val('');
    });

    // function to show images in gallery
    var displayGallery = function displayGallery() {
        $imageUrl.val('');
        $imageCaption.val('');
        $gallery.html('');
        $gallery.show();
        $deleteAllButton.show();

        $.get(url, function (response) {
            response.forEach(function (response, index) {
                var newString = '<div id="photo-box"><img class="materialboxed" data-caption="' + response.caption + '" src="' + response.url + '"><p>' + response.caption + '</p></div>';
                $gallery.append(newString);
            }), 'json';
        });
    };

    // call function to start page with current gallery images
    displayGallery();

    // actions that happen when form is submitted
    $form.submit(function (e) {
        e.preventDefault();
        var newUrl = $imageUrl.val();
        var newCaption = $imageCaption.val();
        var validUrl = true;
        var validCaption = true;

        // validate URL
        if ((newUrl.indexOf('http://') !== -1 || newUrl.indexOf('https://') !== -1) && (newUrl.indexOf('.jpg') !== -1 || newUrl.indexOf('.jpeg') !== -1 || newUrl.indexOf('.gif') !== -1 || newUrl.indexOf('.bmp') !== -1 || newUrl.indexOf('.webp') !== -1 || newUrl.indexOf('.png') !== -1)) {
            $errorUrl.html('');
            $imageUrl.css({ borderLeft: 'none' });
            validUrl = true;
        } else {
            $errorUrl.html('<span>Please input a valid URL in a picture format.</span>');
            $imageUrl.css({ borderLeft: '4px solid red' });
            validUrl = false;
        }

        // validate caption
        if (newCaption !== '' || newCaption !== ' ') {
            $errorCaption.html('');
            $imageCaption.css({ borderLeft: '1px solid black' });
            validCaption = true;
        } else {
            $errorCaption.html('<span>Please submit a caption.</span>');
            $imageCaption.css({ borderLeft: '4px solid red' });
            validCaption = false;
        }

        if (validUrl === true && validCaption === true) {
            $.post(url, {
                url: newUrl,
                caption: newCaption
            }, displayGallery, 'json');
        }
    });

    // function to Delete All pictures from the server
    function onDeleteAll() {
        $.get(url, function (response) {
            response.forEach(function (record) {
                var newUrl = url + record._id;
                $.ajax({
                    url: newUrl,
                    method: 'DELETE'
                });
            });
        }, 'json');
        $imageUrl.val('');
        $imageCaption.val('');
        $gallery.html('');
        $gallery.hide();
    }

    $deleteAllButton.click(onDeleteAll);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
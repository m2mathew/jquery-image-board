(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    // target elements needed
    var $imageUrl = $('#image-url');
    var $imageCaption = $('.image-caption');
    var $form = $('form');
    var $cancelButton = $('#cancel-button');
    var $gallery = $('#gallery');
    var url = 'http://tiyfe.herokuapp.com/collections/mike_m_jquery_image_board';

    // Initialize material box for picture viewing
    $('.materialboxed').materialbox();

    $form.submit(function (e) {
        e.preventDefault();

        $imageUrl.val('');
        $imageCaption.val('');
        $imageCaption.trigger('autoresize');
    });
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
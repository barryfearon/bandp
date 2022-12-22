
//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  $(window).scroll(function(event) {
    
    $(".an_left").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animate__fadeInLeft"); 
      } 
    });

    $(".an_down").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate__fadeInDown"); 
        } 
      });

      $(".an_right").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate__fadeInRight"); 
        } 
      });

      $(".an_text_left").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate__fadeInLeft"); 
        } 
      });
      $(".an_text_right").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate__fadeInRight"); 
        } 
      });
    
  });
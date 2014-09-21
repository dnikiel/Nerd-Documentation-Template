var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

/*smooth scrolling*/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*fixed panel on point*/

flag = true;

$(window).resize(function(){
    menu = $('.top-bar').height();
    banner = $('.banner').height();
    topsum = menu + banner;
    if ($(".panel").css("float") == "left"){
        flag = true;
    } else {
        flag = false;
    }    
    if (flag === false){
        $(".sidebar-menu").css({position: "relative", "top" : "0"});
    }
});

//get top height
menu = $('.top-bar').height();
banner = $('.banner').height();
topsum = menu + banner;

$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
        panel = $(".sidebar-menu");
    if((y >= topsum) && (flag == true) && ($(".panel").css("float") == "left"))  {
        panel.css({position: "fixed", "top" : "50px"});
    } else {
        panel.css({position: "relative", "top" : "0"});
    }
});

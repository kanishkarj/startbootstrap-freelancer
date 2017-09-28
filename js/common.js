(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});

var Navbar = new Vue({
  el: '#mainNav',
  data: {
    title:"KJ",
    items:[
      {
          title:"me",
          icon:"cd-stretchy-nav-icon fa fa-user",
          link:"/#about",
      },
      {
          title:"work",
          icon:"cd-stretchy-nav-icon fa fa-briefcase",
          link:"/#projects",
      },
      {
          title:"blog",
          icon:"cd-stretchy-nav-icon fa fa-rss",
          link:"#",
      },
      {
          title:"Contact",
          icon:"cd-stretchy-nav-icon fa fa-address-book",
          link:"/#footer",
      },
    ]
  },

})


var Footer = new Vue({
  el: 'footer',
  data: {

    copyright: 'KANISHKAR J &copy; 2017',
    items: [
      {
        link: 'mailto:kanishkarj@hotmail.com',
        icon: 'fa fa-fw fa-envelope'
      },
      {
        link: 'https://github.com/kanishkarj',
        icon: 'fa fa-fw fa-github'
      },
      {
        link: 'https://twitter.com/_kanishkarj_',
        icon: 'fa fa-fw fa-twitter'
      },
      {
        link: 'https://www.facebook.com/Kanishkarj',
        icon: 'fa fa-fw fa-facebook'
      },
      {
        link: 'https://www.linkedin.com/in/kanishkar-j-5ba02ab8/',
        icon: 'fa fa-fw fa-linkedin'
      },

    ]
  }
})

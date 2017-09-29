
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
		bottom : '<span>Made with <i class="fa fa-heart pulse"></i> Kanishkar J</span>',
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

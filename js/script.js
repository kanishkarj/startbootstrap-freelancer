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

var projectList = [
  {
    img: 'img/bg.jpeg',
    imgalt: 'img',
    title: 'Hello',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo ultrices rhoncus.',
    tech: [{
        title: 'Vue JS',
        link: 'google.com'
      },
      {
        title: 'Angular JS',
        link: '#'
      },
    ],
  },
  {
    img: 'img/bg.jpeg',
    imgalt: 'img',
    title: 'Hello',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo ultrices rhoncus.',
    tech: [{
        title: 'Vue JS',
        link: 'google.com'
      },
      {
        title: 'Angular JS',
        link: '#'
      },
    ],
  },
  {
    img: 'img/bg.jpeg',
    imgalt: 'img',
    title: 'Hello',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo ultrices rhoncus.',
    tech: [{
        title: 'Vue JS',
        link: 'google.com'
      },
      {
        title: 'Angular JS',
        link: '#'
      },
    ],
  },
];

var ProjectModal = new Vue({
  el: '#projectmodal',
  data: {
    items:projectList
  },
})

var Project = new Vue({
  el: '#projects',
  data: {
    items: projectList
  },
  methods: {
    openLink: function(link) {
      window.open(link);
    }
  }
})

var Footer = new Vue({
  el: 'footer',
  data: {
    location: 'Indian Institute of Technology <br> Indore',
    copyright: 'Copyright &copy; Daemon Labs 2017',
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
    ]
  }
})

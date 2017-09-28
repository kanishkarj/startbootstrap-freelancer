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

var skills = [
  {
    title:"FrontEnd",
    items:[
      {
        img :"img/skills/frontend/html.svg",
        link:"https://www.w3.org/TR/html5/",
      },
      {
        img :"img/skills/frontend/css.svg",
        link:"https://www.w3.org/Style/CSS/Overview.en.html",
      },
      {
        img :"img/skills/frontend/javascript.svg",
        link:"https://www.javascript.com/",
      },
      {
        img :"img/skills/frontend/sass.svg",
        link:"http://sass-lang.com/",
      },
      {
        img :"img/skills/frontend/vue.svg",
        link:"http://vuejs.org",
      },
      {
        img :"img/skills/frontend/angular.svg",
        link:"https://angular.io/",
      },
      {
        img :"img/skills/frontend/bootstrap.svg",
        link:"http://getbootstrap.com/",
      },
      {
        img :"img/skills/frontend/jquery.svg",
        link:"http://jquery.com/",
      },
    ]
  },
  {
    title:"BackEnd",
    items:[
      {
        img :"img/skills/backend/laravel.svg",
        link:"https://laravel.com/",
      },
      {
        img :"img/skills/backend/django.svg",
        link:"http://www.djangoproject.com/",
      },
      {
        img :"img/skills/backend/php.svg",
        link:"http://php.net/",
      },
      {
        img :"img/skills/backend/mysql.svg",
        link:"https://www.mysql.com/",
      },
      {
        img :"img/skills/backend/nodejs.svg",
        link:"https://nodejs.org/en/",
      },
      {
        img :"img/skills/backend/meanio.svg",
        link:"http://mean.io/",
      },
      {
        img :"img/skills/backend/express.svg",
        link:"https://expressjs.com/",
      },
      {
        img :"img/skills/backend/mongodb.svg",
        link:"https://www.mongodb.com/",
      },

    ]
  },
  {
    title:"Build Tools",
    items:[
      {
        img :"img/skills/build_tools/webpack.svg",
        link:"https://webpack.js.org/",
      },
      {
        img :"img/skills/build_tools/gulp.svg",
        link:"https://gulpjs.com/",
      },
      {
        img :"img/skills/build_tools/jekyll.svg",
        link:"https://jekyllrb.com/",
      },
      {
        img :"img/skills/build_tools/pelican.png",
        link:"https://blog.getpelican.com/",
      },

    ]
  },
  {
    title:"Tools",
    items:[
      {
        img :"img/skills/tools/git.svg",
        link:"https://git-scm.com/",
      },
      {
        img :"img/skills/tools/github.svg",
        link:"https://github.com/",
      },
      {
        img :"img/skills/tools/slack.svg",
        link:"https://slack.com/",
      },
      {
        img :"img/skills/tools/atom.svg",
        link:"https://atom.io",
      },
    ]
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

var Skills = new Vue({
  el: '#skills',
  data: {
    items:skills
  },
  methods: {
    openLink: function(link) {
      window.open(link);
    }
  }
})

var Navbar = new Vue({
  el: '#mainNav',
  data: {
    title:"KANISHKAR J",
    items:[
      {
          title:"about",
          link:"#about",
      },
      {
          title:"projects",
          link:"#projects",
      },
      {
          title:"Repertoire",
          link:"#skills",
      },
      {
          title:"blog",
          link:"",
      },
      {
          title:"Contact",
          link:"#footer",
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
        link: 'https://www.linkedin.com/in/kanishkar-j-5ba02ab8/',
        icon: 'fa fa-fw fa-linkedin'
      },

    ]
  }
})

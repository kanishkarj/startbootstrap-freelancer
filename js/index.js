var projectList = [
  {
    img: 'img/projects/pclubiiti.png',
    imgalt: 'img',
    title: 'Programming Club IIT Indore',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    desc: '<h2 id="aboutthisproject">About this project</h2><hr /><p>This is an OpenSource project under the Programming Club of Indian Institute of Technology Indore. The template was forked from another opensource project. Vue js has been used for DOM manipulation and project scalablity. Gulp js has been used to automate tasks and to enhance workflow.</p><p>The UI/UX was conceived with a <strong>"mobile first"</strong> approach. So the website can be viewed on any screen size with ease.</p><h2 id="technicalsheet">Technical Sheet</h2><p>Code technologies I got involved with while working on this project.</p><hr /><ul><li><p>UX Design</p></li><li><p>UX Architecture</p></li><li><p>UI Animations</p></li><li><p>HTML5</p></li><li><p>CSS3 – preprocessed with SASS</p></li><li><p>Vue Js</p></li><li><p>Responsive Web Design</p></li><li><p>Gulp JS</p><p>​</p></li></ul><h2 id="resources">Resources</h2><hr /><ul><li>The project is online at <a href="https://pclubiiti.github.io">https://pclubiiti.github.io</a></li></ul>',
    tech: [

      {
        title: 'Responsive Web Design',
        link: '#'
      },
      {
        title: 'Vue JS',
        link: 'https://vuejs.org'
      },
      {
        title: 'Sass',
        link: 'http://sass-lang.com/'
      },
      {
        title: 'Gulp Js',
        link: 'https://gulpjs.com/'
      },
    ],

  },
  {
    img: 'img/projects/portfolio(bg).png',
    imgalt: 'img',
    title: 'kanishkarj.github.io',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    desc: '<h2 id="aboutthisproject">About this project</h2><hr /><p>An portfolio built by me for me. The gulp js config and file structure was forked from another opensource project. Vue js has been used for DOM manipulation and project scalablity. Gulp js has been used to automate tasks and to enhance workflow. This is an Opensource project, hence anyone else can use the template.</p><p>The UI/UX was conceived with a <strong>"mobile first"</strong> approach. So the website can be viewed on any screen size with ease.</p><h2 id="technicalsheet">Technical Sheet</h2><p>Code technologies I got involved with while working on this project.</p><hr /><ul><li><p>UX Design</p></li><li><p>UX Architecture</p></li><li><p>UI Animations</p></li><li><p>HTML5</p></li><li><p>CSS3 – preprocessed with SASS</p></li><li><p>Vue Js</p></li><li><p>Responsive Web Design</p></li><li><p>Gulp JS</p><p>​</p></li></ul><h2 id="resources">Resources</h2><hr /><ul><li>The project is online at <a href="https://kanishkarj.github.io">https://kanishkarj.github.io</a></li><li>The Code is available at <a href="https://github.com/kanishkarj/kanishkarj.github.io">https://github.com/kanishkarj/kanishkarj.github.io</a></li></ul>',
    tech: [
      {
        title: 'Responsive Web Design',
        link: '#'
      },
      {
        title: 'Vue JS',
        link: 'https://vuejs.org'
      },
      {
        title: 'Sass',
        link: 'http://sass-lang.com/'
      },
      {
        title: 'Gulp Js',
        link: 'https://gulpjs.com/'
      },
    ],

  },
];

var ProjectModal = new Vue({
  el: '#projectmodal',
  data: {
    items: projectList
  },
});

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
});

var About = new Vue({
  el: '#about',
  data: {
    title : "Hi there!",
    desc : "Kanishkar J is an enthusiastic full stack developer who currently is pursuing his Undergraduate studies in computer science and engineering at Indian Institute of technology Indore. Specializing in popular front-end frameworks such as Angular Js and progressive frameworks such as Vue Js. Uses Django and Laravel extensively for backend development. But if required, will use other frameworks/technologies based on the client's requirements.",
  },
});

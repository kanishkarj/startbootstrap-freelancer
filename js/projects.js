var projectList = [{
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

module.exports = {
  personalInfo: {
    email: 'chowakira@gmail.com',
    name: 'Akira Chow',
    descriptionShort: 'I build mobile apps',
    descriptionLong:
      'I’m a software engineer specializing in building and maintaining beautiful and responsive mobile apps.',
  },

  about: {
    paragraphs: [
      'Hi! My name is Akira Chow and I enjoy creating mobile apps. My interest in mobile development started back in 2017 after I followed a mobile development course in university. After lots of trial and error I finally got the gist of it and ever since then I was hooked!',
      'Fast-forward to today I\'ve had the opportunity of working at <a href="https://www.lyceo.nl">an education start-up</a>, <a href="https://www.rbgroup.aero">start-up for airline crews</a>, and <a href="https://www.cae.com">huge aviation corporation</a>. My main focus these days is building and maintaining an application suite of mobile apps at <a href="https://www.cae.com">CAE</a> for crews, pilots, and operators.',
    ],
    recentSkills: [
      'JavaScript (ES6+)',
      'Typescript',
      'React / React Native',
      'Ionic',
      'Angular',
      'Swift (native iOS)',
    ],
  },

  jobs: [
    {
      id: 3,
      title: 'Software Engineer',
      company: 'CAE',
      location: 'Zoetermeer, Netherlands',
      range: '2021 - Present',
      url: 'https://www.cae.com',
      tasks: [
        'Write performant, robust, maintainable code for mobile apps',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React Native, Ionic Angular, and Swift (iOS native)',
        'Collaborate with multinational teams of engineers, designers, and product owners on a daily basis',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'RB Group.aero',
      location: 'Zoetermeer, Netherlands',
      range: '2019 - 2021',
      url: 'https://www.rbgroup.aero',
      tasks: [
        'Research suitable hybrid mobile application development frameworks for a new mobile app',
        'Worked with a team of four engineers to build a new mobile app for pilots using React Native',
      ],
    },
    {
      id: 1,
      title: 'Junior Developer',
      company: 'Inwijs',
      location: 'Leiden, Netherlands',
      range: '2017 - 2017',
      url: 'https://www.lyceo.nl',
      tasks: [
        'Build mobile apps using Ionic Angular and PHP Symfony as backend',
        'Write robust test cases for the backend system',
      ],
    },
    {
      id: 0,
      title: 'Intern',
      company: 'DeDecaan',
      location: 'Leiden, Netherlands',
      range: '2017 - 2017',
      url: 'https://www.dedecaan.net',
      tasks: ['Rebuild and modernize parts of an existing website'],
    },
  ],

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Akira-Chow',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akirachow',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Work',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

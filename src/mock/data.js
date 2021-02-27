import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Edwin Gbeddy | Developer', // e.g: 'Name | Developer'
  lang: 'english', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Edwin Gbeddy',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [

  {
    id: nanoid(),
    img: 'musicPlayer.jpg',
    title: 'Music Player',
    info: 'Technologies: Javascript and Reactjs.',
    info2: 'Website provides a music player with a library ',
    url: 'https://zen-music-player.netlify.app/',
    repo: 'https://github.com/gbedk22/music-zone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covidReport.jpg',
    title: 'Covid 19 Tracker',
    info: 'Technologies: Javascript and Reactjs.',
    info2: 'Website provides up to date global and international covid 19 data. Axios is utilized to make multiple api requests which allow the user to view covid 19 data for each country. Chart.js library is integrated to provide a graphical presentation of covid data for each country.',
    url: 'https://covid19-port.netlify.app',
    repo: 'https://github.com/gbedk22/Covid19-Report', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'toDoList.jpg',
    title: 'To Do App',
    info: 'Technologies: HTML, CSS and Javascript',
    info2: "Website for making a to-do list.  The user can add a task, check the task as completed or delete the task from a list. The dropdown menu allows the user to view all, completed and uncompleted tasks. Finally, the user's to-do list is stored in the browser's local storage so the user always has access to his/her list.",
    url: 'https://list-accomplisher.netlify.app',
    repo: 'https://github.com/gbedk22/To-Do-List', // if no repo, the button will not show up
  } 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [  
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/edwin-gbeddy-81867280',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gbedk22',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

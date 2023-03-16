// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// popup window

const myWorksSection = document.querySelector('.works-section');
const projectList = [
  {
    id: 1,
    title: '#',
    discription: "#",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: '',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Awesome Book',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'To-do List',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Clone Netflix',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    title: 'Digital Clock',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    title: 'Clone Spotify',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: './images/Snapshoot Portfolio.jpg',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const htmlStructure = (id, title, technologies) => `<div class="container1">
        <div class="container2">
          <h3>${title}</h3>
          <ul class="list-language">
            <li class="languages">${technologies[0]}</li>
            <li class="languages">${technologies[1]}</li>
            <li class="languages">${technologies[2]}</li>
            <li class="languages">${technologies[3]}</li>
          </ul>
          <div class="container2-btn">
            <button type="button" id="project-${id}" class="see-project click">See Project</button>
          </div>
        </div>
      </div>`;
projectList.forEach((project) => {
  myWorksSection.innerHTML += htmlStructure(
    project.id,
    project.title,
    project.technologies,
  );
});

// Start of popup section
const popup = (id, title, discription, imageLink, technologies, liveLink, sourceLink) => `<div class="overlay" id="popup-${id}">
    <div class="popupContainer">
      <div class="popupImgContainer1">
        <img class="popupImg" src="./Assets/Snapshoot Portfolio-mobile.svg"/>
      </div>
      <div class="closeBtnContainer">
        <button class="closeBtn" id="closeBtn-${id}">&times</button>
      </div>
      <h1 class="popHeading">${title}</h1>
      <ul class="techList">
        <li class="techItem">${technologies[0]}</li>
        <li class="techItem">${technologies[1]}</li>
        <li class="techItem">${technologies[2]}</li>
      </ul>
      <p class="popPara">${discription}</p>
      <div class="popupBtnContainer">
        <button class="popupBtn">
          <a href="${liveLink}">See Live</a>
          <img src="./Assets/see live icon.svg"/>
        </button>
        <button class="popupBtn">
          <a href="${sourceLink}">See Source</a>
          <img src="./Assets/Vector.svg"/>
        </button>
      </div>      
    </div>
  </div>`;

projectList.forEach((project) => {
  myWorksSection.innerHTML += popup(
    project.id,
    project.title,
    project.discription,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink,
  );
});

// Event listener for See Project Button:
projectList.forEach((project) => {
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click', () => {
    const showPop = document.getElementById(`popup-${project.id}`);
    showPop.style.display = 'flex';
  });
});

projectList.forEach((project) => {
  const closeBtn = document.getElementById(`closeBtn-${project.id}`);
  closeBtn.addEventListener('click', () => {
    const showpop2 = document.getElementById(`popup-${project.id}`);
    showpop2.style.display = 'none';
  });
});
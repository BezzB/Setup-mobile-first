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
// Works section 
// const worksSection = document.querySelector('.works');
// const headWork = [
//   {
//   id: 550,
//   header: 'Multi-Post Stories',
//   paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
//   imgSrc: 'assets/Img Placeholder.png',
//   languages: ['css', 'html', 'bootstrap', 'ruby'],
//   liveLink: 'https://github.com/MarwanDev',
//   sourceLink: 'https://github.com/MarwanDev',
// },
// ];
// const firstWork = `<div class="head-work" id="head-work">
//   <div class="image-container">
//     <img src="assets/Img Placeholder.png" alt="project-cover">
//   </div>
//   <div>
//     <h2>${headWork.header}</h2>
//     <p>${headWork.paragraph}</p>
//     <div class="techstack-container">
//       <ul>
//         <li>${headWork.languages[0]}</li>
//         <li>${headWork.languages[1]}</li>
//         <li>${headWork.languages[2]}</li>
//         <li>${headWork.languages[3]}</li>
//       </ul>
//     </div>
//     <a class="project-button" id="work-button-550">See Project</a>
//   </div>
// </div>`;




// popup window

const myWorksSection = document.querySelector('.works-section');
const projectList = [
  
  {
    id: 1,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
  {
    id: 2,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
  {
    id: 3,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    imageLink: 'assets/Img Placeholder1.png',
    technologies: ['html', 'nootstrap', 'Ruby'],
    liveLink: 'https://github.com/BezzB',
    sourceLink: 'https://github.com/BezzB',
  },
];

const htmlStructure = (id, title, technologies) => `<div class="container1">
        <div class="container2">
          <h3>${title}</h3>
          <ul class="list-language">
            <li class="languages">${technologies[0]}</li>
            <li class="languages">${technologies[1]}</li>
            <li class="languages">${technologies[2]}</li>           
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
        <img class="desktopCloseBtn" src="./Assets/Disabled1.svg" id="deskCloseBtn-${id}"/>
      </div>
      <div class="popDiv">
        <div class="popDiv1">
          <h1 class="popHeading">${title}</h1>
          <ul class="techList">
            <li class="techItem">${technologies[0]}</li>
            <li class="techItem">${technologies[1]}</li>
            <li class="techItem">${technologies[2]}</li>
          </ul>
        </div>
        <div class="popDiv2">
          <p class="popPara">${discription}</p>
        </div>
        <div class="popDiv3 popupBtnContainer">
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

projectList.forEach((project) => {
  const deskCloseBtn = document.getElementById(`deskCloseBtn-${project.id}`);
  deskCloseBtn.addEventListener('click', () => {
    const showpop3 = document.getElementById(`popup-${project.id}`);
    showpop3.style.display = 'none';
  });
});
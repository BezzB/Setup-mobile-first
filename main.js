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
  // Event Listener for close button
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});
// Event Listener for menu items
menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});

}


// Work section 
const worksSection = document.getElementById('works-section');
const overlay = document.getElementById('overlay');
const headWork = {
  id: 550,
  header: 'Multi-Post Stories',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  imgSrc: 'assets/Img Placeholder.png',
  languages: ['css', 'html', 'bootstrap', 'ruby'],
  liveLink: 'https://github.com/Bezzb',
  sourceLink: 'https://github.com/Bezzb',
};

const firstWork = `<div class="head-work" id="head-work">
  <div class="image-container">
    <img src="assets/Img Placeholder.png" alt="project-cover">
  </div>
  <div>
    <h2>${headWork.header}</h2>
    <p>${headWork.paragraph}</p>
    <div class="techstack-container">
      <ul>
        <li>${headWork.languages[0]}</li>
        <li>${headWork.languages[1]}</li>
        <li>${headWork.languages[2]}</li>
        <li>${headWork.languages[3]}</li>
      </ul>
    </div>
    <a class="project-button" id="work-button-550">See Project</a>
  </div>
</div>`;

worksSection.innerHTML = firstWork;

// popup window

const myWorksSection = document.querySelector('.work-container');
const projectList = [
  {
    id: 1,
    title: 'Profesional Art Printing Data',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Css', 'Bootstrap', 'Ruby', 'Html'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Awesome Book',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'To-do List',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Netflix Clone',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    title: 'Digital Clock',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    discription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    imageLink: './Assets/Snapshoot Portfolio-mobile',
    technologies: ['Css', 'Bootstrap', 'Ruby', 'Html'],
    liveLink: '#',
    sourceLink: '#',
  },
];

 const htmlStructure = (id, title, discription, technologies) => 
 ` <div class="work">
<h2>${title}</h2>
<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
<div class="techstack-container">
  <ul>
    <li>Css</li>
    <li>bootstrap</li>
    <li>Ruby</li>
    <li>Html</li>
  </ul>
</div>
<button class="project-button">See Project</button>
</div>`;

projectList.forEach((project) => {
  myWorksSection.innerHTML += htmlStructure(
    project.id,
    project.title,
    project.technologies,
  );
});


// Start of popup section
const popup = (id, title, discription, imageLink, technologies, liveLink, sourceLink) => `<div class="popup-section"">
<div class="closeBtnContainer">
        <button class="closeBtn" id="closeBtn-${id}">&times</button>
        <img class="desktopCloseBtn" src="./images/" id="deskCloseBtn-${id}"/>
      </div>    
<div class="popupContainer">
    <div class="popDiv">
    <div class="popDiv1">
      <h1 class="popHeading">Multi Post Stories</h1>
      <div class="techstack-container">
        <ul>
          <li>Html</li> 
          <li>bootstrap</li> 
          <li>Ruby on rolls</li>
         </ul>
      </div>
      <div class="popupImgContainer1">
        <img class="popupImg" src=".assets/Snapshoot Portfolio.jpg"/>
      </div>                    
        <div class="popDiv2">
          <p class="popPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
        </div>
        <div class="popDiv3 popupBtnContainer">
          <button class="popupBtn">
            <a href="${liveLink}">See Live</a>
            <img src="./assets/enable1.png"/>
          </button>
          <button class="popupBtn">
            <a href="${sourceLink}">See Source</a>
            <img src="./assets/enable."/>
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
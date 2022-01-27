// Mobile menu
function openNav() {
  document.querySelector('#mobile-menu').style.height = '100%';
}

function closeNav() {
  document.querySelector('#mobile-menu').style.height = '0%';
}

document.getElementById('open-menu').onclick = openNav;

document.getElementById('close-nav').onclick = closeNav;
document.getElementById('close-nav1').onclick = closeNav;
document.getElementById('close-nav2').onclick = closeNav;
document.getElementById('close-nav3').onclick = closeNav;

// JavaScript Objects
const recentWorks = {
  image: 'src/Img%20Placeholder.svg',
  imagepopup: 'src/project-popup.svg',
  title: 'Multi-Post Stories',
  paragraph: `A daily selection of privately personalized reads; 
  no accounts or sing-ups required. has been the industry's standard 
  dummy text ever since the 1500s, when an unknown printer took a standerd dummy text.`,
  popupdescription: `Lorem Ipsum is simply dummy text of the printing and typesetting 
  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
  1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
   releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releax map 
    lapora verita.`,
  tecnologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  live: '#',
  source: '#',
};

const projectsArray = [
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-1',
    id: 'project-1',
    btnid: 'btn-project-1',
  },

  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-2',
    id: 'project-2',
    btnid: 'btn-project-2',
  },

  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-3',
    id: 'project-3',
    btnid: 'btn-project-3',
  },

  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-4',
    id: 'project-4',
    btnid: 'btn-project-4',
  },

  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-5',
    id: 'project-5',
    btnid: 'btn-project-5',
  },

  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    tecnologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'url(src/bg-project.svg)',
    imagepopup: 'src/project-popup.svg',
    popupdescription: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essent`,
    live: '#',
    source: '#',
    class: 'Project-6',
    id: 'project-6',
    btnid: 'btn-project-6',
  },
];

// Popup functions
function closepopup() {
  document.querySelector('html').style.overflow = 'hidden';
  const startpopup = document.getElementById('popup');
  function erase() {
    while (startpopup.firstChild) {
      startpopup.removeChild(startpopup.lastChild);
    }
    document.querySelector('html').style.overflow = 'scroll';
  }

  document.getElementById('close-popup').addEventListener('click', () => {
    erase();
  });
}

function popup(num) {
  document.getElementById('popup').innerHTML = `
  <div class="darkpage"></div>
  <div class="popup-container" >
    <button id="close-popup" class="close-pu" type="button">&times;</button>
    <h3 class="works-title-2 title-pu">${projectsArray[num].title}</h3>
    <ul class="ul-p ul-pu">  
      <li class="li-p li-pu">${projectsArray[num].tecnologies[0]}</li>  
      <li class="li-p li-pu">${projectsArray[num].tecnologies[1]}</li>  
      <li class="li-p li-pu">${projectsArray[num].tecnologies[2]}</li>
    </ul>
    <div class="flex-popup">
    <img class="popup-img" src=${projectsArray[num].imagepopup}
    alt="popup image" width="311" height="220"></img>
    <div class="popup-right">
    <p class="p-Project p-popup">${projectsArray[num].popupdescription}</p>
    <div class="popup-btn-container">
    <button type="button" class="popup-btn" href=${projectsArray[num].live}>
    See Live <i class="fas fa-external-link-alt darkicon"></i></button>
    <button type="button" class="popup-btn btn-ml" href=${projectsArray[num].source}>
    See Source <i class="fab fa-github darkicon" title="github icon"></i></button>
    </div>
    </div>
    </div>
  </div>`;

  closepopup();
}

function popuprecentwork() {
  document.getElementById('popup').innerHTML = `
  <div class="darkpage"></div>
  <div class="popup-container" >
    <button id="close-popup" class="close-pu" type="button">&times;</button>
    <h3 class="works-title-2 title-pu">${recentWorks.title}</h3>
    <ul class="ul-p ul-pu">  
      <li class="li-p li-pu">${recentWorks.tecnologies[0]}</li>  
      <li class="li-p li-pu">${recentWorks.tecnologies[1]}</li>  
      <li class="li-p li-pu">${recentWorks.tecnologies[2]}</li>
      <li class="li-p li-pu">${recentWorks.tecnologies[3]}</li>
    </ul>
    <div class="flex-popup">
    <img class="popup-img" src=${recentWorks.imagepopup}
    alt="popup image" width="311" height="220"></img>
    <div class="popup-right">
    <p class="p-Project p-popup">${recentWorks.popupdescription}</p>
    <div class="popup-btn-container">
    <button type="button" class="popup-btn" href=${recentWorks.live}>
    See Live <i class="fas fa-external-link-alt darkicon"></i></button>
    <button type="button" class="popup-btn btn-ml" href=${recentWorks.source}>
    See Source <i class="fab fa-github darkicon" title="github icon"></i></button>
    </div>
    </div>
    </div>
  </div>`;

  closepopup();
}

// Write projects on HTML
document.getElementById('recentWork').innerHTML = `
<img class="img-works" width="327" height="237" alt="works image" src=${recentWorks.image}>
<div class="works-info">
<h3 class="works-title-2">${recentWorks.title}</h3>
<p class="p-work">${recentWorks.paragraph}</p>
<ul>
  <li class="li2">${recentWorks.tecnologies[0]}</li>
  <li class="li2">${recentWorks.tecnologies[1]}</li>
  <li class="li2">${recentWorks.tecnologies[2]}</li>
  <li class="li2">${recentWorks.tecnologies[3]}</li>
</ul>
<button type="button" id="btn-project-works" class="see-project-btn">See Project</button>
</div>`;

function writeProjects(item) {
  const card = `
<section class=${item.class} id=${item.id}> 
 <h3 class="title-p">${item.title}</h3>
<p class="p-Project">${item.paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${item.tecnologies[0]}</li>
  <li class="li-p">${item.tecnologies[1]}</li>
  <li class="li-p">${item.tecnologies[2]}</li>
</ul>
<button type="button" id=${item.btnid} class="btn-p">See Project</button>
</section>`;
  return card;
}

projectsArray.forEach((project) => {
  const elements = document.createElement('div');
  elements.innerHTML = writeProjects(project);
  document.getElementById('projects').appendChild(elements);
});

projectsArray.forEach((image, i) => { document.getElementById(`project-${i + 1}`).style.backgroundImage = projectsArray[i].image; });

// Event Listener to open the Popup
projectsArray.forEach((project, i) => {
  document.getElementById(`btn-project-${i + 1}`).addEventListener('click', () => {
    popup(i);
  });
});

document.getElementById('btn-project-works').addEventListener('click', () => {
  popuprecentwork();
});

function upperCaseError() {
  document.getElementById('error-message').innerHTML = 'Please write the email in <b>lowercase</b> and try again.';
  document.getElementById('email').style.border = '1px solid red';
}

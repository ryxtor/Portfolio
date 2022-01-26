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

const project0 = {
  title: 'Profesional Art<br>Printing Data',
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
};

const project1 = {
  title: 'Profesional Art<br>Printing Data',
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
};

const project2 = {
  title: 'Profesional Art<br>Printing Data',
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
};

const project3 = {
  title: 'Profesional Art<br>Printing Data',
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
};

const project4 = {
  title: 'Profesional Art<br>Printing Data',
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
};

const project5 = {
  title: 'Profesional Art<br>Printing Data',
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
};

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
  project0,
  project1,
  project2,
  project3,
  project4,
  project5,
  recentWorks,
];

document.getElementById('recentWork').innerHTML = `
<img class="img-works" width="327" height="237" alt="works image" src=${projectsArray[6].image}>
<div class="works-info">
<h3 class="works-title-2">${projectsArray[6].title}</h3>
<p class="p-work">${projectsArray[6].paragraph}</p>
<ul>
  <li class="li2">${projectsArray[6].tecnologies[0]}</li>
  <li class="li2">${projectsArray[6].tecnologies[1]}</li>
  <li class="li2">${projectsArray[6].tecnologies[2]}</li>
  <li class="li2">${projectsArray[6].tecnologies[3]}</li>
</ul>
<button type="button" class="see-project-btn">See Project</button>
</div>`;

document.getElementById('projects').innerHTML = `
<section class="Project-1" id="project-1"> 
 <h3 class="title-p">${projectsArray[0].title}</h3>
<p class="p-Project">${projectsArray[0].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[0].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[0].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[0].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>

 
<section class="Project-2" id="project-2"> 
 <h3 class="title-p">${projectsArray[1].title}</h3>
<p class="p-Project">${projectsArray[1].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[1].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[1].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[1].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>

 
<section class="Project-3" id="project-3"> 
 <h3 class="title-p">${projectsArray[2].title}</h3>
<p class="p-Project">${projectsArray[2].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[2].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[2].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[2].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>


<section class="Project-4" id="project-4"> 
 <h3 class="title-p">${projectsArray[3].title}</h3>
<p class="p-Project">${projectsArray[3].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[3].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[3].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[3].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>


<section class="Project-5" id="project-5"> 
 <h3 class="title-p">${projectsArray[4].title}</h3>
<p class="p-Project">${projectsArray[4].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[4].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[4].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[4].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>

<section class="Project-6" id="project-6"> 
 <h3 class="title-p">${projectsArray[5].title}</h3>
<p class="p-Project">${projectsArray[5].paragraph}
</p>
<ul class="ul-p">
  <li class="li-p">${projectsArray[5].tecnologies[0]}</li>
  <li class="li-p">${projectsArray[5].tecnologies[1]}</li>
  <li class="li-p">${projectsArray[5].tecnologies[2]}</li>
</ul>
<button type="button" class="btn-p">See Project</button>
</section>`;

document.getElementById('project-1').style.backgroundImage = projectsArray[0].image;
document.getElementById('project-2').style.backgroundImage = projectsArray[1].image;
document.getElementById('project-3').style.backgroundImage = projectsArray[2].image;
document.getElementById('project-4').style.backgroundImage = projectsArray[3].image;
document.getElementById('project-5').style.backgroundImage = projectsArray[4].image;
document.getElementById('project-6').style.backgroundImage = projectsArray[5].image;
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
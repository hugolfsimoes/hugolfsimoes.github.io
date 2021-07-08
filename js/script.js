const threeline = document.querySelector('.threeline-icon');

function openNav() {
  const menu = document.querySelector('.navigation');
  if(menu.classList.contains('menujs')){
    menu.classList.remove('menujs');
    threeline.innerHTML = '&#9776;'
  }else{
  menu.classList.add('menujs');
  threeline.innerHTML = '&Cross;'
  
  }
}
threeline.addEventListener('click' , openNav)
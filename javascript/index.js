const ouvert = document.querySelector('.ouvert');
const fermer = document.querySelector('.fermer');
const link = document.querySelector('.link');

ouvert.addEventListener('click', ()=>{
    link.style.transform='translate(0px)';
    ouvert.style.display = 'none';
    if(fermer.style.display=='none'){
        fermer.style.display =' block'
    }
    
    
});

fermer.addEventListener('click',()=>{
    link.style.transform='translate(-500px)';
    fermer.style.display = 'none';
    ouvert.style.display='block'
    
});

const premier = document.getElementById('premier');
const deuxieme = document.getElementById('deuxieme');
const trois = document.getElementById('trois');
const header = document.querySelector('header')

premier.addEventListener('click',()=>{
header.style.backgroundImage='url(./images/duche1.jpeg)';
header.style.transition = '2s ease'
});

deuxieme.addEventListener("click", () => {
  header.style.backgroundImage = "url(./images/duche2.jpeg)";
  header.style.transition = "2s ease";
});
trois.addEventListener("click", () => {
  header.style.backgroundImage = "url(./images/duche3.jpeg)";
  header.style.transition = "2s ease";
});
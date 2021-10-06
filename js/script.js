/* TEMA ESCURO E CLARO */
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* HABILIDADES */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');
      
function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills);
});
/*
let frontendID = document.getElementById('frontend');
let backendID = document.getElementById('backend');

let frontendClass = document.querySelector('.frontend');
let backendClass = document.querySelector('.backend');

function frontEnd(){
    if(frontendID){
        frontendClass.forEach((front, f) => {
            front.addEventListener('click', () => {
                var 
            });
        });
        document.querySelector('.front-end-skills').style.display="none";
        document.getElementById('front-icon').style.display="none";
        frontendID.innerHTML = "<i class='fas fa-chevron-up'></i>";
    }else{
        document.querySelector('.front-end-skills').style.display="block";
        document.getElementById('front-icon').style.display="block";
        frontendID.innerHTML = "<i class='fas fa-chevron-down'></i>";
    }
}

function backEnd(){
    if(backendID){
        document.querySelector('.back-end-skills').style.display="none";
        document.getElementById('back-icon').style.display="none";
        backendID.innerHTML = "<i class='fas fa-chevron-up'></i>";
    }else{
        document.querySelector('.back-end-skills').style.display="block";
        document.getElementById('back-icon').style.display="block";
        backendID.innerHTML = "<i class='fas fa-chevron-down'></i>";
    }
}
*/
/* MOSTRAR E OCULTAR SEÇÃO - EDUCATION E WORK */
var blockEducation = document.getElementById('block-education');
var blockWork = document.getElementById('block-work');

function EducationSet(){
    blockEducation.style.display = "block";
    blockWork.style.display = "none";

    if(blockEducation){
        document.querySelector('.education').classList.add('active');
    }else{
        document.querySelector('.education').classList.remove('active');
        document.querySelector('.work').classList.remove('active');
    }
}

function MostraEducation(){
    blockEducation.style.display = "block";
    blockWork.style.display = "none";

    if(blockEducation){
        document.querySelector('.education').classList.add('active');
        document.querySelector('.work').classList.remove('active');
    }else{
        document.querySelector('.education').classList.remove('active');
    }
}

function MostraWork(){
    blockEducation.style.display = "none";
    blockWork.style.display = "block";

    if(blockWork){
        document.querySelector('.work').classList.add('active');
        document.querySelector('.education').classList.remove('active');
    }else{
        document.querySelector('.work').classList.remove('active');
    }
}

/* SCROLL DAS SEÇÕES ATIVAS */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll',scrollActive);


/* SCROLL UP */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp);

/* MODAL SERVICES */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/* PORTFOLIO */
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
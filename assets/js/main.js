/* ALTERAR CORES */
const cores = (toggleId, novaCor) => {
    const toggle = document.getElementById(toggleId),
    corBody = document.querySelector(novaCor);
    corHeader = document.querySelector(novaCor);
    corA = document.querySelector(novaCor);
    corH1 = document.querySelector(novaCor);
    corH3 = document.querySelector(novaCor);
    corH4 = document.querySelector(novaCor);
    corSpan = document.querySelector(novaCor);
    corP = document.querySelector(novaCor);
    corLink = document.querySelector(novaCor);
    
    if(toggle && corBody){
        toggle.addEventListener('click', () => {
            corBody.classList.toggle('inverter');
            corHeader.classList.toggle('inverter');
            corA.classList.toggle('inverter');
            corH1.classList.toggle('inverter');
            corH3.classList.toggle('inverter');
            corH4.classList.toggle('inverter');
            corSpan.classList.toggle('inverter');
            corP.classList.toggle('inverter');
            corLink.classList.toggle('inverter');
        });
    }

}
cores('alterar-cores','body');
cores('alterar-cores','header');
cores('alterar-cores','a');
cores('alterar-cores','h3');
cores('alterar-cores','h4');
cores('alterar-cores','p');
cores('alterar-cores','span');
cores('alterar-cores','nav__link');

/* MOSTRAR MENU */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/* ATIVAR E REMOVER MENU */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // Link ativo
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    // Remover o menu no smartphone
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* SCROLL HOME */
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{interval: 200});

/* SCROLL ABOUT */
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 200});
sr.reveal('.about__text',{delay: 400});

/* SCROLL HABILIDADES */
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{delay: 200});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 400});

/* SCROLL PORTFOLIO */
sr.reveal('.work__img',{interval: 200});

/* SCROLL EXPERIÊNCIA */
sr.reveal('.experience__container',{interval: 200});

/* SCROLL CURSOS */
sr.reveal('.course__container',{interval: 200});

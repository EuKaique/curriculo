/* ESCURECER O SITE */
var fundo = document.getElementById('fundo');
var fundoHeader = document.getElementById('fundo-header');
var aA = document.getElementById('aA');
var aB = document.getElementById('aB');
var aC = document.getElementById('aC');
var aD = document.getElementById('aD');
var aE = document.getElementById('aE');
var aF = document.getElementById('aF');
var scrol = document.getElementsByTagName("body");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

var lampada = document.getElementById('lampada').addEventListener('click', () => {
    fundo.style.backgroundColor = "#121212";
    fundo.style.color = "#FEFEFE";

    fundoHeader.style.backgroundColor = "#121212";
    fundoHeader.style.color = "#FEFEFE";
    fundoHeader.style.textDecorationColor = "#FEFEFE";

    aA.style.color = "#FEFEFE";
    aB.style.color = "#FEFEFE";
    aC.style.color = "#FEFEFE";
    aD.style.color = "#FEFEFE";
    aE.style.color = "#FEFEFE";
    aF.style.color = "#FEFEFE";

    link1.style.color = "#FEFEFE";
    link2.style.color = "#FEFEFE";
    link3.style.color = "#FEFEFE";
});

/* MOSTRAR E OCULTAR SEÇÃO - EDUCATION E WORK */
var blockEducation = document.getElementById('block-education');
var blockWork = document.getElementById('block-work');

function EducationSet(){
    blockEducation.style.display = "block";
    blockWork.style.display = "none";
}

function MostraEducation(){
    blockEducation.style.display = "block";
    blockWork.style.display = "none";
}

function MostraWork(){
    blockEducation.style.display = "none";
    blockWork.style.display = "block";
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
/* CARROSEL DOS PORTFÓLIOS */
$('.portfolios-slider').owlCarousel({
    items: 1,
    section: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true
});


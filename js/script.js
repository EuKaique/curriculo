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

    // SCROLL PARA AS SEÇÕES

    let navBtn = $('.nav-item');

    let infoSection = $('#info-menu');
    let aboutSection = $('#about-menu');
    let skillsSection = $('#skills');
    let experienceSection = $('#experience');
    let servicesSection = $('#services');

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id');

        if(btnId == 'info-menu'){
            scrollTo = infoSection
        }else if(btnId == 'about-menu'){
            scrollTo = aboutSection
        }else if(btnId == 'skills'){
            scrollTo = skillsSection
        }else if(btnId == 'experience'){
            scrollTo = experienceSection
        }else if(btnId == 'services'){
            scrollTo = servicesSection
        }else{
            scrollTo = bannerSection
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });
import { html2pdf } from "./html2pdf.bundle.min";

// MOSTRAR MENU
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav    = document.getElementById(navId)

        //Validando as variáveis existentes
        if(toggle && nav){
            toggle.addEventListener('click', () => {
                // Nós adicionamos a classe show-menu para a tag div com a classe nav__menu
                nav.classList.toggle('show-menu')
            })
        }      
    }
    showMenu('nav-toggle', 'nav-menu')
// REMOVER MENU
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // Quando nós clicamos em cada nav__link, nós removemos a classe show-menu
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL DE SEÇÃO ATIVA LINK
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

// MOSTRAR SCROLL TOP
    function scrollTop(){
        const scrollTop = document.getElementById('scroll-top');
        // Quando a barra de scroll está com 560 da tela, adiciona a classe show-scroll com a classe scroll-top
        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)

// MUDAR TEMA - BRANCO OU PRETO
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Tópico selecionado anteriormente (se o usuário for selecionado)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // Obtemos o tema atual que a interface possui validando a classe dark-theme
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

    // Validamos se o usuário já escolheu um tópico
    if (selectedTheme) {
    // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Ative/desative o tema manualmente com o botão
    themeButton.addEventListener('click', () => {
        // Adicione ou remova o tema escuro / ícone
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // Salvamos o tema e o ícone atual que o usuário escolheu
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

// REDUZIR A TELA DE IMPRIMIR PARA O FORMATO A4
    function scaleCv(){
        document.body.classList.add('scale-cv');
    }

// REDUZIR O TAMANHO QUANDO O CV FOR BAIXADO
    function removeScale(){
        document.body.classList.remove('scale-cv');
    }

// GERAR O PDF
    let areaCv       = document.getElementById('area-cv')
    let resumeButton = document.getElementById('resume-button');

    //função que chama areaCv e as opções do Html2Pdf
    function generateResume(){
        html2pdf(areaCv);
    }
    
    //Quando  o botão for clicado, é executada essas 3 funções
    resumeButton.addEventListener('click', () => {
        // 1. A classe scale-cv é adicionada, ela reduz a tela para impressão
        scaleCv();

        // 2. O PDF é criado
        generateResume();
    });

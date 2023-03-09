$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["JavaScript (ES6)","PHP","Java","Swing/Awt java GUI","C/C++","Ajax","Html5","Css3","JSON","Python","SQL","PL/SQL","SYMFONY5","React JS","FireBase","SGBDR ORACLE","SGBDR MYSQL","GIT","NPM","MERISE","UML", "OCL","BOOTSTRAP", "Matlab", "MIPS ASSEMBLEUR", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Communication: Clarté, efficacité, expression écrite/orale",
                    "Travail en équipe: Collaboration, diversité, interculturel",
                    "Résolution de problèmes: Analyse, décisions, solutions",
                    "Planification et organisation: Priorisation, objectifs, gestion des tâches",
                    "Leadership et gestion de projet: Direction, motivation, responsabilité",
                    "Autonomie: Initiative, gestion, responsabilité",
                    "Apprentissage rapide: Rapidité, technologie, compétences",
                    "Compétences informatiques: Connaissances techniques, outils/logiciels, compétences numériques",
                    "Gestion de pression: Gestion de temps, respect des délais, performance",
                    "Adaptabilité: Flexibilité, changement, situations nouvelles",
                    "La créativité","L'adaptation","l'esprit d'équipe","L'innovation"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
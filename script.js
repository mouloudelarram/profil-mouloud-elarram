document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add("show");
        } else {
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });

    // slide-up script
    document.querySelector('.scroll-up-btn').addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    document.querySelectorAll('.navbar .menu li a').forEach(function(link) {
        link.addEventListener("click", function() {
            // applying smooth scroll again on menu items click
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    document.querySelector('.menu-btn').addEventListener("click", function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["JavaScript (ES6)","PHP","Java","Swing/Awt java GUI","C/C++","Ajax","Html5","Css3","JSON","Python","SQL","PL/SQL","SYMFONY5","React JS","FireBase","SGBDR ORACLE","SGBDR MYSQL","GIT","NPM","MERISE","UML", "OCL","BOOTSTRAP", "Matlab", "MIPS ASSEMBLEUR", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Communication: Clarity, efficiency, written/oral expression",
                    "Teamwork: Collaboration, diversity, intercultural",
                    "Problem solving: Analysis, decisions, solutions",
                    "Planning and organization: Prioritization, objectives, task management",
                    "Leadership and project management: Direction, motivation, responsibility",
                    "Autonomy: Initiative, management, responsibility",
                    "Quick learning: Speed, technology, skills",
                    "Computer skills: Technical knowledge, tools/software, digital skills",
                    "Pressure management: Time management, meeting deadlines, performance",
                    "Adaptability: Flexibility, change, new situations",
                    "Creativity","Adaptation","Team spirit","Innovation"],
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
});

let menu = document.querySelector ('#menu-icon');
let navlist = document.querySelector ('.nav_links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    };

    const sr = ScrollReveal ({
        distance:'65px',
        duration: 2600,
        delay: 450,
        reset: true
        });
        

        sr.reveal(' .about-text', {delay: 200, origin: 'top'});
        sr.reveal (' .hilmi-img', {delay:450, origin: 'top' });
        sr. reveal('.icons', {delay:500, origin: 'left' });
        sr.reveal(' scroll-down', {delay:500, origin: 'right' });
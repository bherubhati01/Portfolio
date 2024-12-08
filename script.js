
        const bar = document.querySelector('.bar');
        const navAbout = document.querySelector('.nav-links');
    
        bar.addEventListener('click', () => {
            navAbout.classList.toggle('to-bar');
        });

        window.addEventListener('scroll', () => {
        if (navAbout.classList.contains('to-bar')) {
            navAbout.classList.remove('to-bar');
        }
    });

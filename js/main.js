const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(sec => observer.observe(sec));


const skills = document.querySelectorAll('.Oneskill');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            const ring = entry.target.querySelector('.ring-path');

            // read percentage from h2 (ex: "90%")
            let percent = entry.target.querySelector('h2').innerText.replace('%', '');
            percent = Number(percent) / 100;

            // ring full length = 600
            let offset = 600 - (600 * percent);

            ring.style.strokeDashoffset = offset;
        }

    });
}, { threshold: 0.4 });

skills.forEach(skill => observer3.observe(skill));
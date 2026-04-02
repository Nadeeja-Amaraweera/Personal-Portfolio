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

// 90% → 625 - (625 * 0.9) = 62.5
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            const ring = entry.target.querySelector('.ring-path');
            
            // example: 90% → convert to circle offset
            let percent = entry.target.querySelector('h2').innerText.replace('%', '');
            let offset = 625 - (625 * (percent / 100));

            ring.style.strokeDashoffset = offset;
        }

    });
}, { threshold: 0.4 });
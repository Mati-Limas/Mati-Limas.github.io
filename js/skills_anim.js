document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.20, 
            rootMargin: '0px 0px -50px 0px'
        };

        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('show');
                        }, index * 80);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }
    } else {
        skillCards.forEach(card => card.classList.add('show'));
    }
});
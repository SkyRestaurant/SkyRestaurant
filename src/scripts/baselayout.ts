document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Prikazivanje/Sakrivanje dugmeta na osnovu skrola
        window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        }
        });

        // Akcija klika za skrol na vrh
        backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
    }
});
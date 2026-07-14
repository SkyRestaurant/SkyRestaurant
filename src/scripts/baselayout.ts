document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('back-to-top-container');
        const backToTopBtn = document.getElementById('back-to-top');
        const progressCircle = document.getElementById('progress-circle');
        
        if (container && backToTopBtn && progressCircle) {
          // Matematika za SVG Krug (Obim = 2 * r * PI)
          // Poluprečnik (r) nam je 46, pa je obim oko 289
          const circumference = 2 * Math.PI * 46;
          progressCircle.style.strokeDasharray = `${circumference}`;
          
          window.addEventListener('scroll', () => {
            // 1. Logika za Prikazivanje / Skrivanje
            const scrollTop = window.scrollY;
            if (scrollTop > 500) {
              container.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
              container.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
              container.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
              container.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }

            // 2. Logika za Progress Krug
            // Računamo koliko je skrolano u odnosu na ukupnu visinu dokumenta
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Math.min osigurava da ne prebacimo 100% ako korisnik povuče ekran previše (bounce na Mac-u)
            const scrollPercent = Math.min(scrollTop / docHeight, 1);
            
            // Iscrtavamo prsten
            const draw = circumference - (scrollPercent * circumference);
            progressCircle.style.strokeDashoffset = `${draw}`;
          });

          // Akcija klika za glatki skrol na vrh
          backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        }


});
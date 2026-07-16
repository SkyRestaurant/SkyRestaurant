document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('back-to-top-container');
        const backToTopBtn = document.getElementById('back-to-top');
        const progressCircle = document.getElementById('progress-circle');
        
        if (container && backToTopBtn && progressCircle) {
          const circumference = 2 * Math.PI * 46;
          progressCircle.style.strokeDasharray = `${circumference}`;
          
          window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 500) {
              container.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
              container.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
              container.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
              container.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }

            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(scrollTop / docHeight, 1);
            
            const draw = circumference - (scrollPercent * circumference);
            progressCircle.style.strokeDashoffset = `${draw}`;
          });

          backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        }


});
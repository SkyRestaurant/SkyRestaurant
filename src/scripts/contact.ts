const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-y-12');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        contactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.contact-animate').forEach((el) => {
    contactObserver.observe(el);
  });
document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.reveal'));
  const buttons = Array.from(document.querySelectorAll('.explore-button, .signup-btn'));
  const cards = Array.from(document.querySelectorAll('.card, .item'));

  const revealOnScroll = () => {
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        section.classList.add('visible');
      }
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px) scale(1.02)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 12px 24px rgba(69, 162, 158, 0.18)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});

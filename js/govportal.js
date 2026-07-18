document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const searchInput = document.getElementById('portalSearch');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const value = event.target.value.toLowerCase();
      links.forEach((link) => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(value) || value === '' ? 'block' : 'none';
      });
    });
  }
});

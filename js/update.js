document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('crop-search');
  const feedback = document.getElementById('search-feedback');
  const cards = Array.from(document.querySelectorAll('.update-card'));

  if (searchInput && feedback) {
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();

      cards.forEach((card) => {
        const crop = card.getAttribute('data-crop') || '';
        const matches = crop.includes(query);
        card.style.display = matches ? 'block' : 'none';
      });

      const visibleCards = cards.filter((card) => card.style.display !== 'none');
      if (query === '') {
        feedback.textContent = 'Try searching for wheat, rice, maize, or tea.';
      } else if (visibleCards.length > 0) {
        feedback.textContent = `Showing results for “${query}”.`;
      } else {
        feedback.textContent = 'No matching crop found. Try another term.';
      }
    });
  }

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 10px 20px rgba(69, 162, 158, 0.18)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
});

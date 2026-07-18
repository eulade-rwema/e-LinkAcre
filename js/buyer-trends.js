document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.trends-header');
  const cards = Array.from(document.querySelectorAll('.trends-card'));
  const refreshBtn = document.querySelector('.trend-action');

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      header.classList.add('refreshed');
      cards.forEach((card, index) => {
        card.classList.toggle('highlight', index === 0);
      });
      header.querySelector('p').textContent = 'Price outlook refreshed with the latest buyer-friendly opportunities.';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('.view-btn'));
  const summaryCards = document.getElementById('summaryCards');

  if (!summaryCards) return;

  const weeklyValues = [
    { label: 'Institutions', value: '128', small: '+8 this week' },
    { label: 'Farmers', value: '10,550', small: '+240 approved' },
    { label: 'Reports', value: '3,210', small: '92% submitted' },
    { label: 'Pending', value: '145', small: '14 urgent' }
  ];

  const monthlyValues = [
    { label: 'Institutions', value: '142', small: '+24 this month' },
    { label: 'Farmers', value: '11,820', small: '+1,270 approved' },
    { label: 'Reports', value: '3,980', small: '96% submitted' },
    { label: 'Pending', value: '98', small: '6 urgent' }
  ];

  const cards = Array.from(summaryCards.querySelectorAll('.card'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const values = button.dataset.range === 'month' ? monthlyValues : weeklyValues;
      cards.forEach((card, index) => {
        const item = values[index];
        card.querySelector('.card-label').textContent = item.label;
        card.querySelector('strong').textContent = item.value;
        card.querySelector('small').textContent = item.small;
      });
    });
  });
});

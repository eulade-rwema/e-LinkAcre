document.addEventListener('DOMContentLoaded', () => {
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const searchInput = document.getElementById('cropSearch');
  const buttons = Array.from(document.querySelectorAll('.chip'));
  const approvedCount = document.getElementById('approvedCount');
  const pendingCount = document.getElementById('pendingCount');
  const scheduledCount = document.getElementById('scheduledCount');

  const counts = { Approved: 0, Pending: 0, Scheduled: 0, Completed: 0 };
  rows.forEach((row) => {
    const status = row.querySelector('.status')?.textContent.trim();
    if (status && counts[status] !== undefined) counts[status] += 1;
  });

  if (approvedCount) approvedCount.textContent = counts.Approved;
  if (pendingCount) pendingCount.textContent = counts.Pending;
  if (scheduledCount) scheduledCount.textContent = counts.Scheduled;

  const filterRows = (filter) => {
    rows.forEach((row) => {
      const status = row.querySelector('.status')?.textContent.trim();
      const text = row.textContent.toLowerCase();
      const matchesFilter = filter === 'all' || status === filter;
      const matchesSearch = !searchInput || searchInput.value.trim() === '' || text.includes(searchInput.value.trim().toLowerCase());
      row.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      filterRows(button.dataset.filter);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeButton = document.querySelector('.chip.active');
      filterRows(activeButton ? activeButton.dataset.filter : 'all');
    });
  }
});

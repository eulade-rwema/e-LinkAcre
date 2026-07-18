document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  const saveMsg = document.getElementById('saveMsg');
  const requestForm = document.getElementById('requestForm');
  const formMsg = document.getElementById('formMsg');

  if (saveBtn && saveMsg) {
    saveBtn.addEventListener('click', () => {
      saveMsg.textContent = 'Settings saved. Your updates are ready.';
    });
  }

  if (requestForm && formMsg) {
    requestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formMsg.textContent = 'Request sent. The input team will follow up soon.';
    });
  }
});

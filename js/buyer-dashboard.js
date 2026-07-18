document.addEventListener('DOMContentLoaded', () => {
  const statusMessage = document.getElementById('statusMessage');
  const pulseBtn = document.getElementById('pulseBtn');
  const miniPanel = document.querySelector('.mini-panel');

  if (pulseBtn && miniPanel) {
    pulseBtn.addEventListener('click', () => {
      miniPanel.classList.add('active');
      miniPanel.querySelector('p').textContent = 'Rice demand is rising quickly in the eastern region this week.';
      statusMessage.textContent = 'Updated trend insight loaded for your next purchase.';
    });
  }
});

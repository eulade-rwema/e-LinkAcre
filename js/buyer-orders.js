document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab-btn'));
  const rows = Array.from(document.querySelectorAll('.order-row'));
  const trackButtons = Array.from(document.querySelectorAll('.track-btn'));
  const modal = document.getElementById('trackModal');
  const closeBtn = modal ? modal.querySelector('.close-btn') : null;
  const modalTrackId = document.getElementById('modal-track-id');
  const modalCropName = document.getElementById('modal-crop-name');
  const modalFarmerName = document.getElementById('modal-farmer-name');
  const timeline = document.getElementById('tracking-timeline');

  const stages = [
    { title: 'Order placed', desc: 'Your purchase request has been received.', time: '06:00' },
    { title: 'Farmer confirmed', desc: 'The farm has accepted the order.', time: '08:15' },
    { title: 'In transit', desc: 'The shipment is moving toward your location.', time: '11:30' },
    { title: 'Arrived', desc: 'Delivery is completed and ready for review.', time: 'Today' }
  ];

  function setActiveTab(activeTab) {
    tabs.forEach((btn) => btn.classList.toggle('active', btn === activeTab));
    rows.forEach((row) => {
      const matches = activeTab.textContent.trim().toLowerCase() === 'all orders' || row.dataset.status === activeTab.textContent.trim().toLowerCase().replace(/ /g, '-');
      row.style.display = matches ? '' : 'none';
    });
  }

  tabs.forEach((btn) => {
    btn.addEventListener('click', () => setActiveTab(btn));
  });

  trackButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.order-row');
      modalTrackId.textContent = `Track ${row.cells[0].textContent}`;
      modalCropName.textContent = row.cells[1].textContent;
      modalFarmerName.textContent = row.cells[2].textContent;
      timeline.innerHTML = '';

      stages.forEach((stage, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item${index === stages.length - 1 ? ' active' : ''}`;
        item.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-title">${stage.title}</span>
            <span class="timeline-desc">${stage.desc}</span>
            <span class="timeline-time">${stage.time}</span>
          </div>`;
        timeline.appendChild(item);
      });

      modal.style.display = 'flex';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  setActiveTab(tabs[0]);
});

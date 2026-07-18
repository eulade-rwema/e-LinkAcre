document.addEventListener("DOMContentLoaded", () => {
  
  const cropCards = Array.from(document.querySelectorAll(".crop-card"));

  const cropTypeSelect = document.getElementById("crop-type");
  const regionSelect = document.getElementById("region");
  const priceSortSelect = document.getElementById("price-sort");

  const orderModal = document.getElementById("orderModal");
  const modalTitle = document.getElementById("modal-crop-title");
  const orderQtyInput = document.getElementById("order-qty");
  const summaryUnitPrice = document.getElementById("summary-unit-price");
  const summarySubtotal = document.getElementById("summary-subtotal");
  const summaryFee = document.getElementById("summary-fee");
  const summaryTotal = document.getElementById("summary-total");
  const closeBtn = orderModal.querySelector(".close-btn");
  const confirmBtn = document.querySelector(".confirm-btn");
  const marketStatus = document.getElementById("marketStatus");

  let currentPricePerKg = 0;

  function filterCrops() {
    const type = cropTypeSelect.value;
    const region = regionSelect.value;
    let visibleCount = 0;

    for (let card of cropCards) {
      const matchesType = type === "all" || card.dataset.type === type;
      const matchesRegion = region === "all" || card.dataset.region === region;

      if (matchesType && matchesRegion) {
        card.style.display = "block";
        visibleCount += 1;
      } else {
        card.style.display = "none";
      }
    }

    marketStatus.textContent = visibleCount > 0
      ? `${visibleCount} matching listings are ready for your review.`
      : "No crops match this filter yet. Try a wider selection.";

    sortCrops();
  }

  function sortCrops() {
    const sortValue = priceSortSelect.value;
    let sortedCards = [...cropCards];

    if (sortValue === "low-high") {
      sortedCards.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (sortValue === "high-low") {
      sortedCards.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    for (let card of sortedCards) {
      card.parentNode.appendChild(card);
    }
  }

  function updateSummary() {
    const qtyTons = parseFloat(orderQtyInput.value);
    const qtyKg = qtyTons * 1000;
    const subtotal = currentPricePerKg * qtyKg;
    const fee = subtotal * 0.02;
    const total = subtotal + fee;

    summarySubtotal.textContent = `${subtotal.toFixed(0)} RWF`;
    summaryFee.textContent = `${fee.toFixed(0)} RWF`;
    summaryTotal.textContent = `${total.toFixed(0)} RWF`;
  }

  document.getElementById("crops-grid").addEventListener("click", e => {
    if (e.target.classList.contains("buy-btn")) {
      const card = e.target.closest(".crop-card");
      const cropTitle = card.querySelector(".crop-title").textContent;
      currentPricePerKg = parseFloat(card.dataset.price);

      modalTitle.textContent = `Order: ${cropTitle}`;
      summaryUnitPrice.textContent = `${currentPricePerKg} RWF`;
      orderQtyInput.value = 1.0;
      updateSummary();

      marketStatus.textContent = `Preparing purchase for ${cropTitle}.`;
      orderModal.style.display = "flex";
    }
  });

  closeBtn.addEventListener("click", () => {
    orderModal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === orderModal) {
      orderModal.style.display = "none";
    }
  });

  orderQtyInput.addEventListener("input", updateSummary);

  confirmBtn.addEventListener("click", () => {
    marketStatus.textContent = "Purchase confirmed. The farmer will follow up shortly.";
    orderModal.style.display = "none";
  });

  cropTypeSelect.addEventListener("change", filterCrops);
  regionSelect.addEventListener("change", filterCrops);
  priceSortSelect.addEventListener("change", sortCrops);

  filterCrops();
});

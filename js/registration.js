// registration.js

document.addEventListener("DOMContentLoaded", () => {
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const filterButtons = Array.from(document.querySelectorAll(".chip"));
  const searchInput = document.getElementById("farmerSearch");
  const activeCount = document.getElementById("activeCount");
  const pendingCount = document.getElementById("pendingCount");
  const inactiveCount = document.getElementById("inactiveCount");

  function highlightRows() {
    rows.forEach((row) => {
      const status = row.querySelector("span");
      if (!status) return;

      if (status.classList.contains("status-active")) {
        row.style.backgroundColor = "#e6ffe6";
      } else if (status.classList.contains("status-pending")) {
        row.style.backgroundColor = "#fffbe6";
      } else if (status.classList.contains("status-inactive")) {
        row.style.backgroundColor = "#ffe6e6";
      } else {
        row.style.backgroundColor = "";
      }
    });
  }

  function countFarmers() {
    const counts = { active: 0, pending: 0, inactive: 0 };

    rows.forEach((row) => {
      const status = row.querySelector("span");
      if (!status) return;

      if (status.classList.contains("status-active")) counts.active++;
      else if (status.classList.contains("status-pending")) counts.pending++;
      else if (status.classList.contains("status-inactive")) counts.inactive++;
    });

    if (activeCount) activeCount.textContent = counts.active;
    if (pendingCount) pendingCount.textContent = counts.pending;
    if (inactiveCount) inactiveCount.textContent = counts.inactive;
  }

  function filterFarmers(statusClass) {
    const searchTerm = searchInput?.value.trim().toLowerCase() || "";

    rows.forEach((row) => {
      const status = row.querySelector("span");
      const rowText = row.textContent.toLowerCase();
      const matchesStatus = statusClass === "all" || status?.classList.contains(statusClass);
      const matchesSearch = searchTerm === "" || rowText.includes(searchTerm);

      row.style.display = matchesStatus && matchesSearch ? "" : "none";
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterFarmers(button.dataset.filter);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activeButton = filterButtons.find((btn) => btn.classList.contains("active"));
      filterFarmers(activeButton ? activeButton.dataset.filter : "all");
    });
  }

  highlightRows();
  countFarmers();
  filterFarmers("all");
});

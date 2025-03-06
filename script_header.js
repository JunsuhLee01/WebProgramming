document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Close all open dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== document.getElementById(toggle.dataset.target)) {
            menu.classList.remove("show");
          }
        });
  
        // Toggle the target dropdown
        const targetMenu = document.getElementById(toggle.dataset.target);
        if (targetMenu) {
          targetMenu.classList.toggle("show");
        }
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav__item")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.remove("show");
        });
      }
    });
  });
/* ====================================================================
   Robot FM Pre-Training — small bits of interactivity.
   Kept intentionally tiny and dependency-free so it's easy to read.
   ==================================================================== */
(function () {
  "use strict";

  // --- Mobile navigation toggle -------------------------------------
  var toggle = document.querySelector(".navbar__toggle");
  var links = document.querySelector(".navbar__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after tapping a link (mobile).
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Auto-update the year in the footer ---------------------------
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();

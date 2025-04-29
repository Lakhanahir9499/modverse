<script>
  function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.style.left === "0px") {
      menu.style.left = "-220px";
    } else {
      menu.style.left = "0px";
    }
  }
</script>

<script>
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".app-card");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    let found = false;

    cards.forEach(card => {
      const name = card.getAttribute("data-name").toLowerCase();
      if (name.includes(query)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    // If no match found, show "No results"
    let noResultEl = document.getElementById("noResults");
    if (!found) {
      if (!noResultEl) {
        noResultEl = document.createElement("div");
        noResultEl.id = "noResults";
        noResultEl.style.color = "white";
        noResultEl.style.marginTop = "20px";
        noResultEl.innerText = "No results found.";
        searchInput.parentNode.appendChild(noResultEl);
      }
    } else {
      if (noResultEl) noResultEl.remove();
    }
  });
</script>

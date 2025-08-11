// ÇáÈÍË Úä ÇáÃÏæÇÊ
document.getElementById("searchInput").addEventListener("input", function() {
  let searchValue = this.value.toLowerCase();
  let tools = document.querySelectorAll(".tool-card");

  tools.forEach(tool => {
    let title = tool.querySelector("h3").textContent.toLowerCase();
    tool.style.display = title.includes(searchValue) ? "block" : "none";
  });
});
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



// ÇáÝáÇÊÑ ÍÓÈ ÇáÊÕäíÝ
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let category = btn.getAttribute("data-category");
    let tools = document.querySelectorAll(".tool-card");

    tools.forEach(tool => {
      if (category === "all" || tool.getAttribute("data-category") === category) {
        tool.style.display = "block";
      } else {
        tool.style.display = "none";
      }
    });
  });
});

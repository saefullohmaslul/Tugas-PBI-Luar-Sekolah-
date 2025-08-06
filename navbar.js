document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector(".main-menu").classList.toggle('show'));

window.addEventListener('click', function(e) {
  const menu = document.querySelector('.main-menu');
  const btn = document.querySelector('.menu-btn');

  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('show');
  }
});

function handleSearch(e) {
    e.preventDefault();
    const keyword = document.getElementById("searchInput").value.trim();
    if (keyword !== "") {
      alert("Kamu mencari: " + keyword);
    }
  }
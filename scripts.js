
function toggleTheme() {
  document.body.classList.toggle('dark');
}
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

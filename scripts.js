
function toggleTheme() {
  document.body.classList.toggle('dark');
}

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }
}

window.onload = () => showSection('about');


function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

/* Hero Section Background + Punchline */
.intro {
  background: linear-gradient(120deg, #fef3c7, #fde68a, #fff);
  text-align: center;
  padding: 3rem 1rem;
  transition: background 0.4s ease;
  animation: fadeIn 0.8s ease-out;
}

body.dark .intro {
  background: linear-gradient(120deg, #1e293b, #0f172a);
  color: white;
}

.punchline {
  font-size: 1.1rem;
  color: #444;
  margin-top: 0.5rem;
  font-style: italic;
  opacity: 0.9;
}

body.dark .punchline {
  color: #ddd;
}

/* Subtle fade-in on hero load */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}







function toggleTheme() {
  document.body.classList.toggle('dark');
}

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.remove('active'));

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.add('active');
    activeSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal({ reset: false, duration: 900, distance: "40px", easing: "ease-in-out" });

  ScrollReveal().reveal(".navbar button", { origin: "top", interval: 100 });
  ScrollReveal().reveal(".intro", { origin: "top" });
  ScrollReveal().reveal(".section h2", { origin: "left" });
  ScrollReveal().reveal(".section p, .project, .tags span", { origin: "bottom", interval: 100 });
});

// Back-to-top
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "⬆️";
backToTopBtn.className = "back-to-top";
backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});


function toggleTheme() {
  document.body.classList.toggle('dark');
}

function showSection(id) {
  const allSections = document.querySelectorAll('.section');
  allSections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      ScrollReveal().clean(target);
      ScrollReveal().reveal(target.querySelectorAll('*'), { interval: 100, origin: "bottom" });
    }, 100);
  }
}

window.onload = () => showSection('about');


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

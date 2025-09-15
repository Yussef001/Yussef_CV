// Toggle Dark/Light mode
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
});

// Year auto
document.getElementById("year").textContent = new Date().getFullYear();

// Animation élégante des sections
const reveals = document.querySelectorAll(".reveal");

// IntersectionObserver plus sensible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Une fois révélé, on arrête d’observer (évite de re-check en permanence)
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,           // déclenche dès que 5% de la section est visible
  rootMargin: "0px 0px -50px 0px" // anticipe l'apparition avant la fin du scroll
});

reveals.forEach(r => observer.observe(r));

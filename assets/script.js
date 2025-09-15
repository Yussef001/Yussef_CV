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
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,         
  rootMargin: "0px 0px -50px 0px" 
});

reveals.forEach(r => observer.observe(r));

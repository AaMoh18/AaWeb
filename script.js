document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleMode');
  const modeIcon = document.getElementById('modeIcon');

  // Set correct icon on load
  modeIcon.src = document.body.classList.contains('light-mode') ? 'images/sun.svg' : 'images/moon.svg';

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeIcon.src = document.body.classList.contains('light-mode') ? 'images/sun.svg' : 'images/moon.svg';
  });

  // Toggle achievements
  document.querySelectorAll('.achievement').forEach(ach => {
    ach.addEventListener('click', () => ach.classList.toggle('open'));
  });

  // Toggle certificates
  document.querySelectorAll('.certificate').forEach(cert => {
    cert.addEventListener('click', () => cert.classList.toggle('open'));
  });

  // Reveal animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Back to top
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Expandable gallery details
document.querySelectorAll(".gallery-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".gallery-item");
    parent.classList.toggle("active");
  });
});


/**
 * K MANOJ — PORTFOLIO INTERACTIONS & CONTROLS
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update dynamic year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Navbar dynamic scroll background styling
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-[0_10px_30px_rgba(0,0,0,0.8)]', 'border-[#333]');
    } else {
      navbar.classList.remove('shadow-[0_10px_30px_rgba(0,0,0,0.8)]', 'border-[#333]');
    }
  });

  // Contact form interactive handling (simulation with feedback)
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        <span>TRANSMITTING...</span>
      `;

      // Simulate network request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();

        // Show success banner
        formFeedback.classList.remove('hidden');
        formFeedback.className = 'p-4 rounded-sm text-xs font-mono text-center border border-emerald-500/50 bg-emerald-950/40 text-emerald-400 block';
        formFeedback.innerHTML = `
          <strong>TRANSMISSION SUCCESSFUL</strong><br/>
          Thank you for reaching out! Your message has been routed to K Manoj (manojkumar911088@gmail.com). You will receive a response shortly.
        `;

        contactForm.reset();

        setTimeout(() => {
          formFeedback.classList.add('hidden');
        }, 7000);
      }, 1200);
    });
  }

  // Smooth reveals on scroll using IntersectionObserver
  const revealElements = document.querySelectorAll('.project-card, .process-card, .skill-category, .quote-panel');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
      observer.observe(el);
    });
  }
});

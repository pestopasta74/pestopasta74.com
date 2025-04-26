// Mobile Navigation Toggle
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        document.getElementById("nav-links").classList.remove("active");
      }
    });
  });

  // Project filtering functionality
  document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (filterButtons) {
      filterButtons.forEach(button => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove("active"));

          // Add active class to clicked button
          button.classList.add("active");

          const filter = button.getAttribute("data-filter");

          // Show/hide project items based on filter
          const projectItems = document.querySelectorAll(".project-item");
          projectItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
              item.style.display = "block";
              setTimeout(() => {
                item.style.opacity = "1";
              }, 50);
            } else {
              item.style.opacity = "0";
              setTimeout(() => {
                item.style.display = "none";
              }, 300);
            }
          });
        });
      });
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Newsletter form submission (prevent default for demo)
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        // In a real application, you'd send this to your backend
        alert('Thanks for subscribing! This is a demo form.');
        emailInput.value = '';
      }
    });
  }

  // Add active class to current page in navigation
  document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage ||
         (currentPage === "" && linkPage === "index.html") ||
         (currentPage === "/" && linkPage === "index.html")) {
        link.classList.add("active");
      }
    });
  });

  // Reveal animations on scroll
  document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.fade-in');

    function revealOnScroll() {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on initial load
  });
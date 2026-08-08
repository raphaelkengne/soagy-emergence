/**
 * SOAGY ÉMERGENCE — Site Corporate
 * Interactions légères & accessibles
 */

(function () {
  'use strict';

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu hamburger
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    function closeMenu() {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      document.body.classList.remove('menu-open');
    }

    function openMenu() {
      nav.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Fermer le menu');
      document.body.classList.add('menu-open');
    }

    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (nav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fermer le menu au clic sur un lien
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Fermer si on passe en desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) {
        closeMenu();
      }
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Fleet filters
  const filterBtns = document.querySelectorAll('.location-section .filter-btn');
  const fleetCards = document.querySelectorAll('.fleet-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      fleetCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Gallery filters
  const galleryBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      galleryBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.gallery;
      galleryItems.forEach((item) => {
        if (filter === 'all' || item.dataset.gallery === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Method tabs
  const methodTabs = document.querySelectorAll('.method-tab');
  const methodContents = document.querySelectorAll('.method-content');

  methodTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      methodTabs.forEach((t) => t.classList.remove('active'));
      methodContents.forEach((c) => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('method-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Contact form → envoi via WhatsApp (+237 699 09 56 06)
  const form = document.getElementById('contactForm');
  if (form) {
    const motifLabels = {
      'devis-btp': 'Demander un devis BTP',
      'location': 'Louer un engin',
      'chambre': 'Réserver une chambre',
      'restaurant': 'Contacter le restaurant',
      'habillement': 'Informations habillement',
      'commerce': 'Informations commerciales',
      'autre': 'Autre'
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#E85D4C';
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      const motif = form.querySelector('#motif').value;
      const nom = form.querySelector('#nom').value.trim();
      const entreprise = form.querySelector('#entreprise').value.trim();
      const email = form.querySelector('#email').value.trim();
      const telephone = form.querySelector('#telephone').value.trim();
      const message = form.querySelector('#message').value.trim();

      const lines = [
        '*Nouvelle demande — SOAGY ÉMERGENCE*',
        '',
        '*Motif :* ' + (motifLabels[motif] || motif),
        '*Nom :* ' + nom,
        entreprise ? '*Entreprise :* ' + entreprise : null,
        '*Téléphone :* ' + telephone,
        '*Email :* ' + email,
        '',
        '*Message :*',
        message
      ].filter(Boolean);

      const text = lines.join('\n');
      const waUrl = 'https://wa.me/237699095606?text=' + encodeURIComponent(text);

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Ouverture WhatsApp…';
      btn.disabled = true;
      btn.style.background = '#25D366';

      // Ouvre WhatsApp (app mobile ou WhatsApp Web)
      window.open(waUrl, '_blank');

      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 2000);
    });
  }

  /* =====================================================
     SCROLL ANIMATIONS
     - Visible & slower (0.85s)
     - Re-trigger every time the element enters the viewport
     ===================================================== */
  if ('IntersectionObserver' in window) {
    // Elements to animate
    const animTargets = [
      // Section headers
      ...document.querySelectorAll('.section-header'),
      // Cards & items
      ...document.querySelectorAll('.activity-card'),
      ...document.querySelectorAll('.fleet-card'),
      ...document.querySelectorAll('.why-card'),
      ...document.querySelectorAll('.step'),
      ...document.querySelectorAll('.project-card'),
      ...document.querySelectorAll('.service-item'),
      ...document.querySelectorAll('.trust-card'),
      ...document.querySelectorAll('.fashion-card'),
      ...document.querySelectorAll('.commerce-item'),
      ...document.querySelectorAll('.gallery-item'),
      // Content blocks
      ...document.querySelectorAll('.about-content'),
      ...document.querySelectorAll('.about-visual'),
      ...document.querySelectorAll('.hotel-content'),
      ...document.querySelectorAll('.hotel-visual'),
      ...document.querySelectorAll('.resto-content'),
      ...document.querySelectorAll('.resto-visual'),
      ...document.querySelectorAll('.contact-form'),
      ...document.querySelectorAll('.contact-info'),
      ...document.querySelectorAll('.btp-cta'),
      ...document.querySelectorAll('.section-cta'),
      ...document.querySelectorAll('.hero-badge'),
      ...document.querySelectorAll('.hero-title'),
      ...document.querySelectorAll('.hero-subtitle'),
      ...document.querySelectorAll('.hero-cta'),
      ...document.querySelectorAll('.hero-trust')
    ];

    // Prepare elements
    animTargets.forEach((el, index) => {
      if (!el) return;
      el.classList.add('anim');

      // Stagger inside grids
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) =>
          c.classList.contains('anim') || 
          c.classList.contains('activity-card') ||
          c.classList.contains('fleet-card') ||
          c.classList.contains('why-card') ||
          c.classList.contains('step') ||
          c.classList.contains('project-card') ||
          c.classList.contains('service-item') ||
          c.classList.contains('trust-card') ||
          c.classList.contains('fashion-card') ||
          c.classList.contains('commerce-item') ||
          c.classList.contains('gallery-item')
        );
        const idx = siblings.indexOf(el);
        if (idx >= 0 && idx < 6) {
          el.classList.add('d' + (idx + 1));
        }
      }

      // Direction variants for side-by-side layouts
      if (el.classList.contains('about-content') || el.classList.contains('hotel-content') || el.classList.contains('resto-content') || el.classList.contains('contact-form')) {
        el.classList.add('from-left');
      }
      if (el.classList.contains('about-visual') || el.classList.contains('hotel-visual') || el.classList.contains('resto-visual') || el.classList.contains('contact-info')) {
        el.classList.add('from-right');
      }
      if (el.classList.contains('activity-card') || el.classList.contains('why-card') || el.classList.contains('fleet-card')) {
        el.classList.add('scale-up');
      }
    });

    // Observer that RE-TRIGGERS every time (no unobserve)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Force reflow so the transition restarts cleanly
            entry.target.classList.remove('in-view');
            // Small timeout to allow browser to register the removal
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                entry.target.classList.add('in-view');
              });
            });
          } else {
            // Reset when leaving viewport so it can animate again on next entry
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    animTargets.forEach((el) => {
      if (el) observer.observe(el);
    });
  }
})();

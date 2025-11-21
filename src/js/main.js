/**
 * Market Sniper Website - Main JavaScript
 * Modular, component-based architecture
 */

import { siteConfig } from '../config/site.js';
import { homeContent } from '../config/content.js';
import { stripeService } from './stripe-service.js';

// ========================================
// Navigation Component
// ========================================
class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navLinks = document.getElementById('navLinks');
    this.mobileMenuBtn = document.getElementById('mobileMenuBtn');

    this.init();
  }

  init() {
    this.renderNavigation();
    this.setupMobileMenu();
    this.setupScrollEffect();
  }

  renderNavigation() {
    // Render logo text
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
      logoText.textContent = siteConfig.name;
    }

    // Render navigation links
    if (this.navLinks) {
      const linksHTML = siteConfig.navigation.map(link =>
        `<a href="${link.href}">${link.name}</a>`
      ).join('');

      this.navLinks.innerHTML = linksHTML;
    }
  }

  setupMobileMenu() {
    if (this.mobileMenuBtn && this.navLinks) {
      this.mobileMenuBtn.addEventListener('click', () => {
        this.navLinks.classList.toggle('active');
        this.mobileMenuBtn.classList.toggle('active');
      });

      // Close menu when clicking a link
      this.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          this.navLinks.classList.remove('active');
          this.mobileMenuBtn.classList.remove('active');
        });
      });
    }
  }

  setupScrollEffect() {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        this.navbar.style.background = 'rgba(10, 14, 13, 0.98)';
        this.navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      } else {
        this.navbar.style.background = 'rgba(10, 14, 13, 0.95)';
        this.navbar.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  }
}

// ========================================
// Hero Component
// ========================================
class Hero {
  constructor() {
    this.heroSection = document.getElementById('hero');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const content = homeContent.hero;
    const heroContent = this.heroSection.querySelector('.hero-content');

    if (!heroContent) return;

    const badgeHTML = content.badge.show
      ? `<span class="hero-badge">${content.badge.text}</span>`
      : '';

    const statsHTML = content.stats.show
      ? `<div class="hero-stats">
          ${content.stats.items.map(stat => `
            <div class="stat">
              <div class="stat-number">${stat.number}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
         </div>`
      : '';

    heroContent.innerHTML = `
      ${badgeHTML}
      <h1 class="hero-title">
        ${content.title.line1}<br>
        <span class="hero-title-highlight">${content.title.line2}</span>
      </h1>
      <p class="hero-subtitle">${content.subtitle}</p>
      <div class="hero-cta">
        <a href="${content.buttons.primary.link}" class="btn btn-primary">
          ${content.buttons.primary.text}
        </a>
        <a href="${content.buttons.secondary.link}" class="btn btn-secondary">
          ${content.buttons.secondary.text}
        </a>
      </div>
      ${statsHTML}
    `;
  }
}

// ========================================
// How It Works Component
// ========================================
class HowItWorks {
  constructor() {
    this.section = document.querySelector('#how-it-works');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const content = homeContent.howItWorks;
    const header = this.section.querySelector('.section-header');
    const grid = document.getElementById('stepsGrid');

    if (header) {
      header.innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.subtitle}</p>
      `;
    }

    if (grid) {
      grid.innerHTML = content.steps.map(step => `
        <div class="step-card">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      `).join('');
    }
  }
}

// ========================================
// Pricing Component
// ========================================
class Pricing {
  constructor() {
    this.section = document.querySelector('#pricing');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const content = homeContent.pricing;
    const header = this.section.querySelector('.section-header');
    const grid = document.getElementById('pricingGrid');

    if (header) {
      header.innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.subtitle}</p>
      `;
    }

    if (grid) {
      grid.innerHTML = content.plans.map(plan => {
        const popularBadge = plan.popular
          ? `<span class="popular-badge">Most Popular</span>`
          : '';

        const savings = plan.savings
          ? `<div class="pricing-savings">${plan.savings}</div>`
          : '';

        const addonClass = plan.isAddon ? ' addon' : '';
        const popularClass = plan.popular ? ' popular' : '';

        return `
          <div class="pricing-card${popularClass}${addonClass}">
            ${popularBadge}
            <h3>${plan.name}</h3>
            <div class="pricing-price">
              <span class="pricing-amount">$${plan.price}</span>
              <span class="pricing-period">/${plan.period}</span>
            </div>
            ${savings}
            <ul class="pricing-features">
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn-primary" data-plan-id="${plan.id}">
              Get Started
            </button>
          </div>
        `;
      }).join('');

      // Add event listeners to pricing buttons
      grid.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const planId = e.target.dataset.planId;
          this.handlePurchase(planId);
        });
      });
    }
  }

  handlePurchase(planId) {
    // Redirect to Stripe Checkout
    stripeService.redirectToCheckout(planId);
  }
}

// ========================================
// FAQ Component
// ========================================
class FAQ {
  constructor() {
    this.section = document.querySelector('#faq');
    this.init();
  }

  init() {
    this.render();
    this.setupAccordion();
  }

  render() {
    const content = homeContent.faq;
    const header = this.section.querySelector('.section-header');
    const list = document.getElementById('faqList');

    if (header) {
      header.innerHTML = `
        <h2>${content.title}</h2>
        ${content.subtitle ? `<p>${content.subtitle}</p>` : ''}
      `;
    }

    if (list) {
      list.innerHTML = content.items.map((item, index) => `
        <div class="faq-item" data-index="${index}">
          <button class="faq-question">
            <span>${item.question}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${item.answer}</p>
          </div>
        </div>
      `).join('');
    }
  }

  setupAccordion() {
    const items = this.section.querySelectorAll('.faq-item');

    items.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        items.forEach(i => i.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
}

// ========================================
// Footer Component
// ========================================
class Footer {
  constructor() {
    this.footer = document.getElementById('footer');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const content = this.footer.querySelector('.footer-content');
    const bottom = this.footer.querySelector('.footer-bottom');

    if (content) {
      content.innerHTML = `
        <div class="footer-brand">
          <h3>${siteConfig.name}</h3>
          <p>${siteConfig.footer.description}</p>
        </div>
        ${siteConfig.footer.links.map(section => `
          <div class="footer-column">
            <h4>${section.title}</h4>
            <ul>
              ${section.items.map(item => `
                <li><a href="${item.href}">${item.name}</a></li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      `;
    }

    if (bottom) {
      bottom.textContent = siteConfig.footer.copyright;
    }
  }
}

// ========================================
// Initialize Application
// ========================================
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initComponents());
    } else {
      this.initComponents();
    }
  }

  initComponents() {
    new Navigation();
    new Hero();
    new HowItWorks();
    new Pricing();
    new FAQ();
    new Footer();

    console.log(' Market Sniper website initialized');
  }
}

// Start the application
new App();

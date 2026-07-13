const menuButton = document.querySelector('.hamburger-button');
const primaryNav = document.querySelector('.primary-nav');
const slideMenu = document.querySelector('.slide-menu');
const slideOverlay = document.querySelector('.slide-menu-overlay');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.querySelector('.theme-toggle-icon');
const primaryLinks = [...document.querySelectorAll('.primary-nav .nav-link')];
const resumeLinks = [...document.querySelectorAll('.resume-nav-link')];
const trackedSections = [...document.querySelectorAll('main section[id], header[id]')];
const resumeSections = [...document.querySelectorAll('.resume-content > section[id]')];
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const hoverCards = [...document.querySelectorAll('.job-card, .skill-groups article, .portfolio-project')];
const revealItems = [...document.querySelectorAll('.reveal-item')];
const portfolioBackTop = document.querySelector('.portfolio-back-top');
const lightbox = document.querySelector('.trade-lightbox');
const lightboxCanvas = document.querySelector('.trade-lightbox-canvas');
const lightboxImage = document.querySelector('.trade-lightbox-image');
const lightboxClose = document.querySelector('.trade-lightbox-close');
const lightboxTriggers = [...document.querySelectorAll('.trade-lightbox-trigger')];
const splitCaseMedia = window.matchMedia('(min-width: 737px)');
let splitCaseLayoutState = null;

function enhanceSplitCaseLayout() {
  const main = document.querySelector('.trade-split-main:not(.case-static-media-main)');
  if (!main || splitCaseLayoutState || !splitCaseMedia.matches) return;

  const sections = [...main.querySelectorAll(':scope > .trade-split-section')];
  if (!sections.length) return;

  const layout = document.createElement('div');
  const rail = document.createElement('div');
  const story = document.createElement('div');
  const visualPairs = [];

  layout.className = 'case-scroll-layout';
  rail.className = 'case-scroll-rail';
  story.className = 'case-scroll-story';

  sections.forEach((section) => {
    const visual = section.querySelector(':scope > .trade-split-visual');
    if (visual) {
      const item = document.createElement('div');
      item.className = section.classList.contains('trade-split-hero')
        ? 'case-scroll-visual-item case-scroll-visual-item--hero'
        : 'case-scroll-visual-item';
      item.append(visual);
      rail.append(item);
      visualPairs.push({ section, visual });
    }
    story.append(section);
  });

  layout.append(rail, story);
  main.append(layout);
  main.classList.add('case-scroll-enhanced');
  splitCaseLayoutState = { main, layout, sections, visualPairs };
}

function restoreSplitCaseLayout() {
  if (!splitCaseLayoutState) return;

  const { main, layout, sections, visualPairs } = splitCaseLayoutState;
  const fragment = document.createDocumentFragment();
  const visualBySection = new Map(visualPairs.map(({ section, visual }) => [section, visual]));

  sections.forEach((section) => {
    const visual = visualBySection.get(section);
    if (visual) section.insertBefore(visual, section.firstElementChild);
    fragment.append(section);
  });

  main.append(fragment);
  layout.remove();
  main.classList.remove('case-scroll-enhanced');
  splitCaseLayoutState = null;
}

function syncSplitCaseLayout() {
  if (splitCaseMedia.matches) {
    enhanceSplitCaseLayout();
  } else {
    restoreSplitCaseLayout();
  }
}

syncSplitCaseLayout();
splitCaseMedia.addEventListener?.('change', syncSplitCaseLayout);

hoverCards.forEach((card) => {
  card.addEventListener('pointerenter', () => card.classList.add('is-hover'));
  card.addEventListener('pointerleave', () => card.classList.remove('is-hover'));
  card.addEventListener('focusin', () => card.classList.add('is-hover'));
  card.addEventListener('focusout', () => card.classList.remove('is-hover'));
});

function setMenuOpen(isOpen) {
  slideMenu?.classList.toggle('slide-menu--open', isOpen);
  slideOverlay?.classList.toggle('slide-menu-overlay--open', isOpen);
  hamburgerIcon?.classList.toggle('hamburger-icon--open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
  slideMenu?.setAttribute('aria-hidden', String(!isOpen));
  if (slideOverlay) slideOverlay.hidden = false;
}

menuButton?.addEventListener('click', () => {
  const isOpen = !slideMenu?.classList.contains('slide-menu--open');
  setMenuOpen(isOpen);
});

slideOverlay?.addEventListener('click', () => setMenuOpen(false));

document.addEventListener('pointerdown', (event) => {
  if (!slideMenu?.classList.contains('slide-menu--open')) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (slideMenu.contains(target) || menuButton?.contains(target)) return;
  setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
  if (event.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.slide-menu a, a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.alt = '';
}

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    openLightbox(trigger.dataset.lightboxSrc || '', trigger.dataset.lightboxAlt || '');
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxCanvas?.addEventListener('click', (event) => {
  if (event.target === lightboxCanvas) closeLightbox();
});

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeToggleIcon) themeToggleIcon.textContent = isDark ? '☀' : '☾';
  themeToggle?.setAttribute('aria-label', isDark ? '切换为浅色模式' : '切换为深色模式');
  themeToggle?.setAttribute('title', isDark ? '切换为浅色模式' : '切换为深色模式');
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersDark ? 'dark' : 'light');

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});

function currentSectionId(sections, offset) {
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (window.scrollY + offset >= section.offsetTop) {
      current = section.id;
    }
  });
  return current;
}

function updateActiveLinks() {
  if (currentPage !== 'index.html') {
    const vibeCodingPages = ['case-prompt-make.html', 'case-name-agent.html'];
    const activePage = currentPage.startsWith('case-')
      ? (vibeCodingPages.includes(currentPage) ? 'vibe-coding.html' : 'product-cases.html')
      : currentPage;
    primaryLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === activePage);
    });
    return;
  }

  const primaryId = currentSectionId(trackedSections, 150);
  const resumeId = currentSectionId(resumeSections, 170);

  primaryLinks.forEach((link) => {
    const href = link.getAttribute('href');
    let isActive = href === `#${primaryId}`;

    if (href === 'index.html') {
      isActive = ['resume', 'about', 'experience', 'education', 'skills', 'methods'].includes(primaryId);
    }

    link.classList.toggle('active', isActive);
  });

  resumeLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${resumeId}`);
  });
}

function updatePortfolioBackTop() {
  if (!portfolioBackTop) return;
  portfolioBackTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8);
}

window.addEventListener('scroll', updateActiveLinks, { passive: true });
window.addEventListener('scroll', updatePortfolioBackTop, { passive: true });
window.addEventListener('resize', updateActiveLinks);
updateActiveLinks();
updatePortfolioBackTop();

portfolioBackTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

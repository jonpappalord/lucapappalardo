const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.site-nav a')];
const setActiveLink = () => {
  const current = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
  links.forEach(link => link.classList.toggle('active', current && link.hash === `#${current.id}`));
};
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('#year').textContent = new Date().getFullYear();

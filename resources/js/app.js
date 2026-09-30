const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
const setMenuOpen = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  toggle.innerHTML = open ? 'Cerrar <span aria-hidden="true">−</span>' : 'Menú <span aria-hidden="true">+</span>';
};
toggle.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) setMenuOpen(false);
});
window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenuOpen(false));
const projectType = document.querySelector('#project-type');
const updateContactLinks = () => {
  const project = projectType.value;
  const message = `Hola, me interesa ${project} con Windrois Les Beaux. Me gustaría conversar sobre mi idea.`;
  document.querySelector('#contact-whatsapp').href = `https://wa.me/50769593466?text=${encodeURIComponent(message)}`;
  document.querySelector('#contact-email').href = `mailto:reny@portierstrategy.com?subject=${encodeURIComponent('Nuevo proyecto: ' + project + ' — Windrois Les Beaux')}&body=${encodeURIComponent(message + '\n\nMi nombre es: \nMi idea: \nFecha estimada: ')}`;
};
projectType.addEventListener('change', () => {
  updateContactLinks();
  document.querySelector('#contact-help').textContent = `Conversemos sobre ${projectType.value}. Elige tu canal de contacto.`;
});
updateContactLinks();

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.nav');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;

  const activeColor = el.getAttribute('active-color');
  indicator.style.backgroundColor = activeColor;

  // Marca o item como ativo
  el.classList.add('is-active');
  el.style.color = activeColor;

  nav.style.boxShadow = `0 2px 20px ${activeColor}`; 
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target);
  });

  if (item.classList.contains('is-active')) {
    handleIndicator(item);
  }
});

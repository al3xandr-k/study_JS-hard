const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
  const body = document.querySelector('body');

  let r;
  let g;
  let b;
  let color;

  r = Math.floor(Math.random() * (256));
  g = Math.floor(Math.random() * (256));
  b = Math.floor(Math.random() * (256));

  color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  body.style.backgroundColor = color;

  btn.innerHTML = color;
})
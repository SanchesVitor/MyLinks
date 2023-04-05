function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './src/assets/avatar-light.png');
  } else {
    img.setAttribute('src', './src/assets/avatar.png');
  }
 }

 function ativaLetra(elemento){
  const arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
// Seletor de cores

// definição de variáveis para indicar qual é a selecionada

let selected = document.querySelector('.selected');
let unselected = document.getElementsByClassName('unselected');

// função para selecionar a nova cor

function colorSelection(evento) {
  // primeiro remove a seleção da antiga e a coloca na lista das não selecionadas

  selected.classList.remove('selected');
  selected.classList.add('unselected');
  unselected = document.getElementsByClassName('unselected');

  // define a cor clicada como selecionada
  selected = evento.target;
  selected.classList.add('selected');
  selected.classList.remove('unselected');

  // adiciona o listener para as novas cores não selecionadas, possibilitando nova troca

  for (let index = 0; index < unselected.length; index += 1) {
    unselected[index].addEventListener('click', colorSelection);
  }
}

//  adiciona o listener para as novas cores não selecionadas

for (let index = 0; index < unselected.length; index += 1) {
  unselected[index].addEventListener('click', colorSelection);
}

// Para pintar:

// definição de variáveis para os quadrados preenchíveis, o selecionado, o estilo de origem da cor e a cor

// para a função getComputedStyle foi utilizada a seguinte referência: https://zellwk.com/blog/css-values-in-js/#:~:text=First%2C%20you%20need%20to%20select,to%20get%20the%20element's%20styles.&text=If%20you%20log%20style%20%2C%20you,property%20and%20their%20respective%20values.&text=You%20can%20also%20see%20this%20object%20in%20Chrome's%20and%20Firefox's%20dev%20tools.

const fillable = document.getElementsByClassName('pixel');
let selectedPixel = document.getElementsByClassName('selectedPixel');
let style = getComputedStyle(selected);
let color = style.backgroundColor;

// função para aplicar a cor em um quadrado preenchível selecionado:

function pixelSelection(evento) {
  selectedPixel = evento.target;
  style = getComputedStyle(selected);
  color = style.backgroundColor;
  selectedPixel.style.backgroundColor = color;
}

// loop para adicionar todos os quadrados em fillable:
function makeFillable() {
  for (let index = 0; index < fillable.length; index += 1) {
    fillable[index].addEventListener('click', pixelSelection);
  }
}

makeFillable();
// Para limpar o quadro:

const botaoLimpar = document.getElementById('clear-board');
function limpa() {
  const toClear = document.getElementsByClassName('pixel');
  for (let index = 0; index < toClear.length; index += 1) {
    toClear[index].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', limpa);

const botaoCriar = document.getElementById('create-board');
function cria() {
  const board = document.getElementById('pixel-board');
  const pixels = document.getElementsByClassName('tr');
  const heightFromUser = document.getElementById('height').value;
  const widthFromUser = document.getElementById('width').value;
  const row = '<div class="tr"></div>';
  const collumn = '<div class="pixel"></div>';
  const newHeight = row.repeat(heightFromUser);
  const newWidth = collumn.repeat(widthFromUser);
  board.innerHTML = `${newHeight}`;
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].innerHTML = newWidth;
    console.log(pixels[index]);
  }
  makeFillable();
}

botaoCriar.addEventListener('click', cria);

// Seletor de cores

    // definição de variáveis para indicar qual é a selecionada

let selected = document.querySelector(".selected");
let unselected = document.getElementsByClassName("unselected");

    // função para selecionar a nova cor

function colorSelection(evento) {

    // primeiro remove a seleção da antiga e a coloca na lista das não selecionadas

    selected.classList.remove("selected");
    selected.classList.add("unselected");
    unselected = document.getElementsByClassName("unselected");

    // define a cor clicada como selecionada
    selected = evento.target;
    selected.classList.add("selected");
    selected.classList.remove("unselected");

    // adiciona o listener para as novas cores não selecionadas, possibilitando nova troca

    for (let index = 0; index < unselected.length; index++) {
        unselected[index].addEventListener("click", colorSelection); 
    }
}

    //  adiciona o listener para as novas cores não selecionadas

for (let index = 0; index < unselected.length; index++) {
    unselected[index].addEventListener("click", colorSelection);
}

// Para pintar:

    // definição de variáveis para os quadrados preenchíveis, o selecionado, o estilo de origem da cor e a cor
       
        // para a função getComputedStyle foi utilizada a seguinte referência: https://zellwk.com/blog/css-values-in-js/#:~:text=First%2C%20you%20need%20to%20select,to%20get%20the%20element's%20styles.&text=If%20you%20log%20style%20%2C%20you,property%20and%20their%20respective%20values.&text=You%20can%20also%20see%20this%20object%20in%20Chrome's%20and%20Firefox's%20dev%20tools.


let fillable = document.getElementsByClassName("pixel");
let selectedPixel = document.getElementsByClassName("selectedPixel")
let style = getComputedStyle(selected);
let color = style.backgroundColor;

    // loop para adicionar todos os quadrados em fillable:

for (let index = 0; index < fillable.length; index++) {
    fillable[index].addEventListener("click", pixelSelection);
}
    // função para aplicar a cor em um quadrado preenchível selecionado:

function pixelSelection(evento) {
    selectedPixel = evento.target;
    let style = getComputedStyle(selected);
    let color = style.backgroundColor;
    selectedPixel.style.backgroundColor = color;
}

// Para limpar o quadro:

let botaoLimpar = document.getElementById("clear-board")
function limpa() {
    let toClear = document.getElementsByClassName("pixel")
    toClear[toClear.length-1].style.backgroundColor = "white"
    console.log(toClear)
}

botaoLimpar.addEventListener("click", limpa)




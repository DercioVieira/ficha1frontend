// Mudar Paragrafo   
    // Seleciona o parágrafo e o botão pelo ID
const paragrafo = document.getElementById('par');
const botao = document.getElementById('botao');
// Adiciona um evento de clique no botão
botao.addEventListener('click', () => {
    // Modifica o texto do parágrafo
    paragrafo.textContent = 'NovoParágrafo!';
});
// Mudar cor de fundo
const colorChange = document.getElementById('exercicio2');
const botaoColor = document.getElementById('botaoColor');
    // Adiciona um evento de clique no botão
    botaoColor.addEventListener('click', () => {
    // Altera a cor de fundo do div
    colorChange.style.backgroundColor = '#ffcc00'; 
 });
 function adicionarItem() {
    const novoItemTexto = document.getElementById('novoItem').value;
    if (novoItemTexto.trim() !== '') {
        const minhaLista = document.getElementById('minhaLista');
        const novoItem = document.createElement('li');
        novoItem.textContent = novoItemTexto;
        const botaoRemover = document.createElement('input');
        botaoRemover.type = 'button';
        botaoRemover.value = 'Remover';
        botaoRemover.onclick = function () {
            minhaLista.removeChild(novoItem);
        };
        novoItem.appendChild(botaoRemover);
        minhaLista.appendChild(novoItem);
        document.getElementById('novoItem').value = '';
    }
}

function removerItem(botao) {
    const item = botao.parentNode;
    const minhaLista = document.getElementById('minhaLista');
    minhaLista.removeChild(item);
}
const meuInput = document.getElementById('meuInput');
const meuBotao = document.getElementById('meuBotao');
const meuParagrafo = document.getElementById('meuParagrafo');

meuBotao.addEventListener('click', () => {
    const valorInput = meuInput.value;
    meuParagrafo.textContent = `Valor digitado: ${valorInput}`;
});
const contador = document.getElementById('contador');
const inputIncremento = document.getElementById('incremento');

function incrementarContador() {
    const valorIncremento = parseInt(inputIncremento.value) || 0;
    const valorAtual = parseInt(contador.textContent);
    const novoValor = valorAtual + valorIncremento;
    contador.textContent = novoValor;
}
function alternarVisibilidade() {
    const paragrafo = document.getElementById('mParagrafo');
    paragrafo.style.display = (paragrafo.style.display === 'none') ? 'block' : 'none';
}
const minhaImagem = document.getElementById('exercicio7');
const botao1 = document.getElementById('botao1');
let imagemAtual = 'imagem_inicial.jpg';

botao1.addEventListener('click', () => {
    if (imagemAtual === 'imagem_inicial.jpg') {
        minhaImagem.src = 'imagem/nova_imagem.jpg';
        imagemAtual = 'nova_imagem.jpg';
    } else {
        minhaImagem.src = 'imagem/imagem_inicial.jpg';
        imagemAtual = 'imagem_inicial.jpg';
    }
});
function alternarClasse() {
    const exercicio8 = document.getElementById('exercicio8');
    exercicio8.classList.toggle('destacado');
}

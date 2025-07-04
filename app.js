function criaCartao(titulo, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.classList.add('cartao');

    const conteudo = document.createElement('div');
    conteudo.classList.add('cartao__conteudo');

    const front = document.createElement('div');
    front.classList.add('cartao__conteudo__pergunta');

    const tituloElem = document.createElement('h3');
    tituloElem.textContent = titulo;

    const perguntaElem = document.createElement('p');
    perguntaElem.textContent = pergunta;

    front.appendChild(tituloElem);
    front.appendChild(perguntaElem);

    const back = document.createElement('div');
    back.classList.add('cartao__conteudo__resposta');

    const respostaElem = document.createElement('p');
    respostaElem.textContent = resposta;

    back.appendChild(respostaElem);

    conteudo.appendChild(front);
    conteudo.appendChild(back);

    cartao.appendChild(conteudo);
    container.appendChild(cartao);

    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });
}


let substituicoes = {
    'e': "enter",
    'i': "imes",
    'a': "ai",
    'o': "ober",
    'u': "ufat",
};

let substituicoesInvertidas = {};

const elementsId = (id) => {
    return document.getElementById(id);
}

const toggleDivs = () => {
    let divComInfos = elementsId('div-of');
    let divQueCopia = elementsId('div-on');

    divComInfos.style.display = 'none';
    divQueCopia.style.display = 'flex';
}

const criptografar = () => {
    let palavraDoUsuario = document.querySelector('input').value;
    let textoCriptografado = aplicarSubstituicoes(palavraDoUsuario, substituicoes);
    palavraCripitografada(textoCriptografado);
}

const descriptografar = () => {
    let text = document.querySelector('.copy-text');
    let textoCriptografado = document.querySelector('input').value;
    let textoDescriptografado = aplicarSubstituicoes(textoCriptografado, substituicoesInvertidas);


    text.innerHTML = textoDescriptografado;
    toggleDivs();
}

const palavraCripitografada = (e) => {
    let text = document.querySelector('.copy-text');
    let palavraDoUsuario = document.querySelector('input');

    text.innerHTML = e;
    palavraDoUsuario.value = '';
    toggleDivs();
}

const aplicarSubstituicoes = (texto, substituicoes) => {
    for (let chave in substituicoes) {
        if (substituicoes.hasOwnProperty(chave)) {
            texto = texto.replace(new RegExp(chave, 'g'), substituicoes[chave]);
        }
    }
    return texto;
}


for (let chave in substituicoes) {
    if (substituicoes.hasOwnProperty(chave)) {
        substituicoesInvertidas[substituicoes[chave]] = chave;
    }
}


const copiarMensagem = (text) => {
    navigator.clipboard.writeText(text)
};

document.getElementById('copyButton').addEventListener('click', () => {
    const conteudoDaDiv = document.getElementById('copy-text').innerText;
    copiarMensagem(conteudoDaDiv);
});








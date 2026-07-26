// ===============================
// UTILIDADES
// ===============================

// Hash do aparelho (sempre gera o mesmo número)
function hashString(str){

    let hash = 0;

    for(let i = 0; i < str.length; i++){

        hash = ((hash << 5) - hash) + str.charCodeAt(i);

        hash |= 0;

    }

    return Math.abs(hash);

}

// Gera um número entre min e max usando o hash
function gerarValor(hash,min,max){

    return min + (hash % (max-min+1));

}

// Verifica se é iPhone
function ehIphone(marca){

    return marca.toLowerCase() === "apple";

}

// Formata número
function formatar(numero){

    return Number(numero).toFixed(0);

}

// Botão recomendado
function gerarBotao(hash){

    return gerarValor(hash,30,55);

}

// DPI recomendado
function gerarDPI(hash){

    return gerarValor(hash,500,700);

}

// Sensibilidade Geral
function sensiGeral(hash){

    return gerarValor(hash,170,200);

}

// Red Dot
function sensiRedDot(hash){

    return gerarValor(hash+5,165,200);

}

// Mira 2x
function sensi2x(hash){

    return gerarValor(hash+10,150,195);

}

// Mira 4x
function sensi4x(hash){

    return gerarValor(hash+15,130,185);

}

// AWM
function sensiAWM(hash){

    return gerarValor(hash+20,20,120);

}

// Olhadinha
function sensiOlhadinha(hash){

    return gerarValor(hash+25,170,200);

}

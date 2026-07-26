// ===============================
// GERADOR PROFISSIONAL V2
// ===============================

function hash(str) {
    let h = 0;

    for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h |= 0;
    }

    return Math.abs(h);
}

// ===============================
// VERIFICAR iPHONE
// ===============================

function ehIphone(marca) {
    return marca.toLowerCase() === "apple";
}

// ===============================
// DPI INTELIGENTE
// ===============================

function calcularDPI(modelo) {

    const h = hash(modelo);

    const dpi = [
        480,
        500,
        520,
        540,
        560,
        580,
        600,
        620,
        640,
        660,
        680,
        700
    ];

    return dpi[h % dpi.length];

}

// ===============================
// BOTÃO DE TIRO
// ===============================

function calcularBotao(modelo) {

    const h = hash(modelo);

    const botoes = [
        34,
        36,
        38,
        40,
        42,
        44,
        46,
        48,
        50,
        52,
        54
    ];

    return botoes[h % botoes.length];

}

// ===============================
// GERAR SENSIBILIDADE
// ===============================

function gerarSensibilidade(marca, modelo) {

    const h = hash(modelo);

    const geral = 185 + (h % 16);
    const redDot = 180 + (h % 20);
    const mira2x = 170 + (h % 21);
    const mira4x = 155 + (h % 26);
    const awm = 70 + (h % 31);
    const olhadinha = 200;

    const dpi = calcularDPI(modelo);
    const botao = calcularBotao(modelo);

    let html = `
        📱 <b>${modelo}</b><br>
        🏷️ <b>${marca}</b><br><br>

        🎯 Geral: <b>${geral}</b><br>
        ⚙️ Red Dot: <b>${redDot}</b><br>
        ⚙️ Mira 2x: <b>${mira2x}</b><br>
        ⚙️ Mira 4x: <b>${mira4x}</b><br>
        ⚙️ AWM: <b>${awm}</b><br>
        👁️ Olhadinha: <b>${olhadinha}</b><br><br>
    `;

    if (!ehIphone(marca)) {

        html += `
        📏 DPI Recomendada: <b>${dpi}</b><br><br>
        `;

    } else {

        html += `
        🍎 iPhone não utiliza DPI.<br><br>
        `;

    }

    html += `
        🎮 Botão de tiro recomendado: <b>${botao}</b><br><br>
        ⚡ Configuração otimizada para puxada de capa.
    `;

    resultado.innerHTML = html;

}

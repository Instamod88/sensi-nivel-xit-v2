// ===============================
// GERADOR PROFISSIONAL
// ===============================

function hash(str){
    let h = 0;

    for(let i = 0; i < str.length; i++){
        h = (h << 5) - h + str.charCodeAt(i);
        h |= 0;
    }

    return Math.abs(h);
}

// ===============================
// DETECTAR iPHONE
// ===============================

function ehIphone(marca){
    return marca.toLowerCase() === 'apple';
}

// ===============================
// CALCULAR BASE
// ===============================

function calcularBase(modelo){

    const h = hash(modelo);

    // 186 ~ 200
    return 186 + (h % 15);
}

// ===============================
// CALCULAR DPI
// ===============================

function calcularDPI(modelo){

    const h = hash(modelo);

    // 560 ~ 740
    return 560 + (h % 181);
}

// ===============================
// BOTÃO RECOMENDADO
// ===============================

function calcularBotao(modelo){

    const h = hash(modelo);

    // 36 ~ 54
    return 36 + (h % 19);
}

// ===============================
// GERAR RESULTADO
// ===============================

function gerarSensibilidade(marca, modelo){

    const base = calcularBase(modelo);

    const geral = base;
    const redDot = Math.max(170, base - 5);
    const mira2x = Math.max(160, base - 12);
    const mira4x = Math.max(145, base - 22);
    const awm = 100 + (hash(modelo) % 16);
    const olhadinha = 200;

    const dpi = calcularDPI(modelo);
    const botao = calcularBotao(modelo);

    let html = `
        📱 <b>${modelo}</b><br>
        🏷️ ${marca}<br><br>

        🎯 <b>Geral:</b> ${geral}<br>
        🔴 <b>Red Dot:</b> ${redDot}<br>
        🔵 <b>Mira 2x:</b> ${mira2x}<br>
        🟣 <b>Mira 4x:</b> ${mira4x}<br>
        🎯 <b>AWM:</b> ${awm}<br>
        👁️ <b>Olhadinha:</b> ${olhadinha}<br><br>
    `;

    // iPhone não mostra DPI
    if(!ehIphone(marca)){
        html += `
            📏 <b>DPI Recomendada:</b> ${dpi}<br><br>
        `;
    } else {
        html += `
            🍎 <b>iPhone:</b> não utiliza DPI<br><br>
        `;
    }

    html += `
        🎮 <b>Botão de tiro recomendado:</b> ${botao}<br><br>
        ⚡ Configuração otimizada para puxada de capa.
    `;

    resultado.innerHTML = html;
}

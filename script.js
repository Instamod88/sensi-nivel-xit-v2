// ===============================
// ELEMENTOS
// ===============================

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const pesquisa = document.getElementById("pesquisa");
const resultado = document.getElementById("resultado");
const loading = document.getElementById("loading");
const gerarBtn = document.getElementById("gerarBtn");


// ===============================
// CARREGAR MARCAS
// ===============================

function carregarMarcas(){

    brand.innerHTML = `<option value="">Selecione a marca</option>`;

    Object.keys(celulares)
    .sort()
    .forEach(marca=>{

        brand.innerHTML += `
        <option value="${marca}">
        ${marca}
        </option>`;

    });

}

carregarMarcas();


// ===============================
// CARREGAR MODELOS
// ===============================

brand.addEventListener("change",()=>{

    model.innerHTML=`<option value="">Selecione o modelo</option>`;

    if(!brand.value) return;

    celulares[brand.value]
    .sort()
    .forEach(aparelho=>{

        model.innerHTML += `
        <option value="${aparelho}">
        ${aparelho}
        </option>`;

    });

});


// ===============================
// BOTÃO GERAR
// ===============================

gerarBtn.addEventListener("click",()=>{


    let aparelhoDigitado = pesquisa.value.trim();


    if(!aparelhoDigitado){

        resultado.innerHTML=`
        ⚠️ Digite o nome do aparelho.
        `;

        return;

    }


    loading.style.display="block";

    resultado.innerHTML="";


    setTimeout(()=>{

        loading.style.display="none";


        gerarSensibilidade(
            "Personalizado",
            aparelhoDigitado
        );


    },1800);


});

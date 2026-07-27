// ===============================
// PESQUISA DE CELULAR LIVRE
// ===============================

const pesquisa = document.getElementById("pesquisa");
const listaPesquisa = document.getElementById("listaPesquisa");

function pesquisarCelular(texto){

    listaPesquisa.innerHTML="";

    if(texto.length < 2){
        listaPesquisa.style.display="none";
        return;
    }

    listaPesquisa.style.display="block";

    const div = document.createElement("div");

    div.className="itemPesquisa";

    div.innerHTML=`
    📱 Usar aparelho: <b>${texto}</b>
    `;

    div.onclick=()=>{

        pesquisa.value = texto;

        listaPesquisa.style.display="none";

    };

    listaPesquisa.appendChild(div);

}


pesquisa.addEventListener("input",e=>{

    pesquisarCelular(e.target.value);

});


document.addEventListener("click",e=>{

    if(!e.target.closest(".search-box")){

        listaPesquisa.style.display="none";

    }

});

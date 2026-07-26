// ===============================
// PESQUISA INTELIGENTE
// ===============================

const pesquisa = document.getElementById("pesquisa");
const listaPesquisa = document.getElementById("listaPesquisa");

function pesquisarCelular(texto){

    listaPesquisa.innerHTML="";

    if(texto.length < 2){
        listaPesquisa.style.display="none";
        return;
    }

    const resultado = listaCelulares.filter(item=>

        item.modelo.toLowerCase().includes(texto.toLowerCase()) ||

        item.marca.toLowerCase().includes(texto.toLowerCase())

    );

    if(resultado.length===0){

        listaPesquisa.style.display="block";

        listaPesquisa.innerHTML=`
        <div class="itemPesquisa">
        ❌ Esse aparelho ainda não está cadastrado.
        </div>
        `;

        return;

    }

    listaPesquisa.style.display="block";

    resultado.slice(0,20).forEach(item=>{

        const div=document.createElement("div");

        div.className="itemPesquisa";

        div.innerHTML=`
        📱 <b>${item.modelo}</b><br>
        <small>${item.marca}</small>
        `;

        div.onclick=()=>{

            brand.value=item.marca;

            brand.dispatchEvent(new Event("change"));

            setTimeout(()=>{

                model.value=item.modelo;

            },30);

            pesquisa.value=item.modelo;

            listaPesquisa.style.display="none";

        };

        listaPesquisa.appendChild(div);

    });

}

pesquisa.addEventListener("input",e=>{

    pesquisarCelular(e.target.value);

});

document.addEventListener("click",e=>{

    if(!e.target.closest(".search-box")){

        listaPesquisa.style.display="none";

    }

});

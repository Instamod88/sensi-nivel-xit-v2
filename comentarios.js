// ===============================
// COMENTÁRIOS
// ===============================

const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");
const enviarComentario = document.getElementById("enviarComentario");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function carregarComentarios(){

    commentList.innerHTML="";

    comentarios.reverse().forEach(texto=>{

        const p=document.createElement("p");

        p.textContent=texto;

        commentList.appendChild(p);

    });

    comentarios.reverse();

}

carregarComentarios();

enviarComentario.addEventListener("click",()=>{

    const texto=commentInput.value.trim();

    if(texto==="") return;

    comentarios.push(texto);

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

    commentInput.value="";

    carregarComentarios();

});

commentInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter" && !e.shiftKey){

        e.preventDefault();

        enviarComentario.click();

    }

});

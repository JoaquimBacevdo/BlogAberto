document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('publicar').addEventListener('click', adicionarPost);
})

function adicionarPost(){
    
    const titulo = document.getElementById('post-titulo').value;
    const conteudo = document.getElementById('post-conteudo').value;

    
    const postElemento = document.createElement('article');

    
    postElemento.innerHTML = `
        <h3>${titulo}</h3>
        <p>Data da publicação: <time>${new Date().toLocaleDateString()}</time></p>
        <p>${conteudo}</p>
        <button class="excluir-post" onclick="excluirPost(this)"> 
        <img class=”lixeira”  src=”img/trash-can.png” alt=”ícone de lata de lixo”>
        </button>
        <div class="form-comentario">
        <label for="comentario">Comentario:</label>
        <textarea id="comentario" class="comentario-input" placeholder="Deixe seu comentario.."></textarea>
        <button class="adicionar-comentario" onclick="adicionarcomentario(this)"></button>
        </div>
        <div class="comentarios"></div>
    `;

    
    const postsSection = document.getElementById('post');
    const primeiroPost = postsSection.firstChild;
    postsSection.insertBefore(postElemento, primeiroPost);

    
    document.getElementById('post-form').reset();
}

window.excluirPost = function(button){
    const postElemento = button.closest('article');
    postElemento.remove()
}

window.adicionarComentario = function(button) {
    const postElemento = button.closest('article');

    const comentariosDiv = postElemento.querySelector('.comentarios');

    const comentarioInput = postElemento.querySelector('.comentarios-input');

    const comentario = comentarioInput.value.trim(); 

    if(comentario != ''){
        const comentarioElemento = document.createElement('');

        comentarioElemento.textContent = comentario;

        comentariosDiv.appendChild(comentarioElemento);

        comentarioInput.value = '';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('publicar').addEventListener('click', adicionarPost);
});

function adicionarPost() {
    const titulo = document.getElementById('post-titulo').value;
    const conteudo = document.getElementById('post-conteudo').value;

    const postElemento = document.createElement('article');
    const comentarioId = `comentario-${Date.now()}`;

    const tituloElemento = document.createElement('h3');
    tituloElemento.textContent = titulo;

    const dataElemento = document.createElement('p');
    dataElemento.innerHTML = `Data da publicação: <time>${new Date().toLocaleDateString()}</time>`;

    const conteudoElemento = document.createElement('p');
    conteudoElemento.textContent = conteudo;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.className = 'excluir-post';
    botaoExcluir.type = 'button';
    botaoExcluir.addEventListener('click', function() {
        excluirPost(botaoExcluir);
    });

    const iconeExcluir = document.createElement('img');
    iconeExcluir.className = 'lixeira';
    iconeExcluir.src = 'img/trash-can.png';
    iconeExcluir.alt = 'Ícone de lixeira';
    botaoExcluir.appendChild(iconeExcluir);

    const formularioComentario = document.createElement('div');
    formularioComentario.className = 'form-comentario';

    const labelComentario = document.createElement('label');
    labelComentario.htmlFor = comentarioId;
    labelComentario.textContent = 'Comentário:';

    const textareaComentario = document.createElement('textarea');
    textareaComentario.id = comentarioId;
    textareaComentario.className = 'comentario-input';
    textareaComentario.placeholder = 'Deixe seu comentário...';

    const botaoComentario = document.createElement('button');
    botaoComentario.className = 'adicionar-comentario';
    botaoComentario.type = 'button';
    botaoComentario.textContent = 'Adicionar comentário';
    botaoComentario.addEventListener('click', function() {
        adicionarComentario(botaoComentario);
    });

    formularioComentario.append(labelComentario, textareaComentario, botaoComentario);

    const comentariosContainer = document.createElement('div');
    comentariosContainer.className = 'comentarios';

    postElemento.append(
        tituloElemento,
        dataElemento,
        conteudoElemento,
        botaoExcluir,
        formularioComentario,
        comentariosContainer
    );

    const postsSection = document.getElementById('post');
    const tituloPosts = postsSection.querySelector('h2');
    const primeiroPost = tituloPosts ? tituloPosts.nextElementSibling : null;
    if (primeiroPost) {
        postsSection.insertBefore(postElemento, primeiroPost);
    } else {
        postsSection.appendChild(postElemento);
    }

    document.getElementById('post-form').reset();
}

function excluirPost(button) {
    const postElemento = button.closest('article');
    if (postElemento) {
        postElemento.remove();
    }
}

function adicionarComentario(button) {
    const postElemento = button.closest('article');
    if (!postElemento) {
        return;
    }

    const comentariosDiv = postElemento.querySelector('.comentarios');
    const comentarioInput = postElemento.querySelector('.comentario-input');
    if (!comentariosDiv || !comentarioInput) {
        return;
    }

    const comentario = comentarioInput.value.trim();

    if (comentario !== '') {
        const comentarioElemento = document.createElement('p');
        comentarioElemento.className = 'comentario-item';

        comentarioElemento.textContent = comentario;

        comentariosDiv.appendChild(comentarioElemento);

        comentarioInput.value = '';
    }
}

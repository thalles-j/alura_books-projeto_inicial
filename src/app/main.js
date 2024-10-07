let livros = []
getBuscarLivrosDaAPI()
const elementInsertLivros = document.querySelector('#livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch('/src/data/livros.json');
    livros = await res.json();
    console.log(livros);
    exibirOsLivro(livros);

}

function exibirOsLivro(listaLivros){
    listaLivros.forEach(livro => {
        elementInsertLivros.innerHTML +=`
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `;
    });
}
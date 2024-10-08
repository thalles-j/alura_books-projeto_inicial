const btnAll = document.querySelectorAll('.btn');
btnAll.forEach(btn => btn.addEventListener('click', filtrarLivroDeFront));

function filtrarLivroDeFront(){
    const elementBtn = document.getElementById(this.id);
    const categoria = elementBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorOnly() : filtrarPorCategoria(categoria);
    console.log(livrosFiltrados);
    exibirOsLivro(livrosFiltrados);
    if(categoria == 'disponivel'){
        exebirPriceTotal()
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorOnly() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exebirPriceTotal(){
    elementoPriceTotal.innerHTML= 
    `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}
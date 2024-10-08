const btnAll = document.querySelectorAll('.btn');
btnAll.forEach(btn => btn.addEventListener('click', filtrarLivroDeFront));

function filtrarLivroDeFront(){
    const elementBtn = document.getElementById(this.id);
    const categoria = elementBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorOnly() : filtrarPorCategoria(categoria);
    console.log(livrosFiltrados);
    exibirOsLivro(livrosFiltrados);
    if(categoria == 'disponivel'){
        const priceTotal = calculePriceTotalLivrosOnly(livrosFiltrados)
        exebirPriceTotal(priceTotal)
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorOnly() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exebirPriceTotal(priceTotal){
    elementoPriceTotal.innerHTML= 
    `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${priceTotal}</span></p>
    </div>
    `
}
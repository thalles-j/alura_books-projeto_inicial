const btnAll = document.querySelectorAll('.btn');
btnAll.forEach(btn => btn.addEventListener('click', filtrarLivroDeFront));

function filtrarLivroDeFront(){
    const elementBtn = document.getElementById(this.id);
    const category = elementBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == category);
    exibirOsLivro(livrosFiltrados);
}

document.addEventListener('DOMContentLoaded', function() {
    let btnOrderPrice = document.querySelector('#btnOrdenarPorPreco');
    
    // Verifica se o botão foi encontrado
    if (btnOrderPrice) {
        btnOrderPrice.addEventListener('click', function() {
            livrosOrderPrice(); // Chama a função ao clicar
        });
    } else {
        console.error('Botão "Ordenar por Preço" não encontrado.');
    }
});

function livrosOrderPrice() {
    let livrosOrder = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivro(livrosOrder);
}
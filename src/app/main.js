let livros = []
const endpointDaAPI = 'https://raw.githubusercontent.com/guilhermeonrails/casadocodigo/main/livros.json';
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros)
    exibirOsLivro(livrosComDesconto);
}

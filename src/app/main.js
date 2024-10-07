import { exibirOsLivro } from "./exibirOsLivros";
import { aplicarDesconto } from "./aplicarDesconto";

let livros = []
getBuscarLivrosDaAPI()
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.log(livros);
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivro(livrosComDesconto);

}

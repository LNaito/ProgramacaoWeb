import * as readline from "readline";
import { CatalogoFilmes } from "./CatalogoFilmes.js";
import type { Filme } from "./types.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const catalogo = new CatalogoFilmes();

function perguntar(pergunta: string): Promise<string> {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

async function menu(): Promise<void> {
  while (true) {
    console.log(`
===== CATÁLOGO DE FILMES =====
1 - Adicionar filme
2 - Listar filmes
3 - Buscar por título
4 - Buscar por gênero
5 - Remover filme
6 - Sair
`);

    const opcao = await perguntar("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await adicionarFilme();
        break;

      case "2":
        catalogo.listarFilmes();
        break;

      case "3":
        const tituloBusca = await perguntar("Digite o título: ");
        const resultadosTitulo = catalogo.buscarPorTitulo(tituloBusca);

        console.log("Resultados:");
        console.log(resultadosTitulo);
        break;

      case "4":
        const generoBusca = await perguntar("Digite o gênero: ");
        const resultadosGenero = catalogo.buscarPorGenero(generoBusca);

        console.log("Resultados:");
        console.log(resultadosGenero);
        break;

      case "5":
        const tituloRemover = await perguntar("Título para remover: ");
        catalogo.removerPorTitulo(tituloRemover);
        break;

      case "6":
        console.log("Encerrando...");
        rl.close();
        return;

      default:
        console.log("Opção inválida.");
    }
  }
}

async function adicionarFilme(): Promise<void> {
  const titulo = await perguntar("Título: ");
  const ano = Number(await perguntar("Ano: "));
  const genero = await perguntar("Gênero: ");
  const duracao = Number(await perguntar("Duração (min): "));
  const avaliacaoInput = await perguntar("Avaliação (0-10 ou vazio): ");

  const avaliacao = avaliacaoInput ? Number(avaliacaoInput) : undefined;

  const filme: Filme = {
    titulo,
    ano,
    genero,
    duracao,
  ...(avaliacao !== undefined && { avaliacao })
  };

  catalogo.adicionarFilme(filme);
}

// iniciar
menu();
import type { Filme } from "./types.js";
export declare class CatalogoFilmes {
    private filmes;
    adicionarFilme(filme: Filme): void;
    listarFilmes(): void;
    buscarPorTitulo(titulo: string): Filme[];
    buscarPorGenero(genero: string): Filme[];
    removerPorTitulo(titulo: string): void;
}
//# sourceMappingURL=CatalogoFilmes.d.ts.map
export class CatalogoFilmes {
    constructor() {
        this.filmes = [];
    }
    adicionarFilme(filme) {
        if (filme.avaliacao !== undefined) {
            if (filme.avaliacao < 0 || filme.avaliacao > 10) {
                console.log("Avaliação deve estar entre 0 e 10.");
                return;
            }
        }
        this.filmes.push(filme);
        console.log("Filme adicionado com sucesso!");
    }
    listarFilmes() {
        if (this.filmes.length === 0) {
            console.log("Nenhum filme cadastrado.");
            return;
        }
        this.filmes.map((f, index) => {
            console.log(`
[${index + 1}]
Título: ${f.titulo}
Ano: ${f.ano}
Gênero: ${f.genero}
Duração: ${f.duracao} min
Avaliação: ${f.avaliacao ?? "N/A"}
      `);
        });
    }
    buscarPorTitulo(titulo) {
        return this.filmes.filter(f => f.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
    buscarPorGenero(genero) {
        return this.filmes.filter(f => f.genero.toLowerCase() === genero.toLowerCase());
    }
    removerPorTitulo(titulo) {
        const index = this.filmes.findIndex(f => f.titulo.toLowerCase() === titulo.toLowerCase());
        if (index === -1) {
            console.log("Filme não encontrado.");
            return;
        }
        this.filmes.splice(index, 1);
        console.log("Filme removido com sucesso!");
    }
}
//# sourceMappingURL=CatalogoFilmes.js.map
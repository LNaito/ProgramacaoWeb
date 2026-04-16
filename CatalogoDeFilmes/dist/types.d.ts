export type Genero = "Ação" | "Aventura" | "Musical" | "Comédia" | "Suspense" | "Mistério" | "Drama" | "Terror" | "Ficção Científica" | "Romance";
export interface Filme {
    titulo: string;
    ano: number;
    genero: Genero | string;
    duracao: number;
    avaliacao?: number;
}
//# sourceMappingURL=types.d.ts.map
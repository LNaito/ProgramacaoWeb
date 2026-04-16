//Generos dos filmes do Catalogo
export type Genero = 
  | "Ação"
  | "Aventura"
  | "Musical"
  | "Comédia"
  | "Suspense"
  | "Mistério"
  | "Drama"
  | "Terror"
  | "Ficção Científica"
  | "Romance";
  
export interface Filme {
  titulo: string;
  ano: number;
  genero: Genero | string; // union type
  duracao: number;
  avaliacao?: number; // opcional
}
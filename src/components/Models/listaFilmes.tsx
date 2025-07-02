export default interface listaFilmes {
  page: number;
  results: infosFilme[];
  total_pages: number;
  total_results: number;
}

export interface infosFilme {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
}
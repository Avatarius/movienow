interface ICollapse {
  duration: string[] | null;
  quality: string[] | null;
  url: string[] | null;
  voice: string[] | null;
}

interface IMovie {
  actors: string[] | null;
  age: string | null;
  budget: string | null;
  collapse: ICollapse;
  composers: string[] | null;
  countries: string[] | null;
  description: string | null;
  directors: string[] | null;
  editors: string[] | null;
  fees_russia: string | null;
  fees_world: string | null;
  frames: string[] | null;
  genres: string[];
  hdvb: ICollapse;
  id: number;
  id_kinopoisk: number;
  imdb_votes: string | null;
  kinopoisk_votes: string | null;
  kodik: ICollapse;
  operators: string[] | null;
  painters: string[] | null;
  poster: string | undefined;
  premiere_russia: string | null;
  premiere_world: string | null;
  producers: string[] | null;
  rating_imdb: string | null;
  rating_kinopoisk: string | null;
  screenshots: string[] | null;
  screenwriters: string[] | null;
  tagline: string | null;
  title: string;
  title_alternative: string | null;
  trailer: string | null;
  type: string | null;
  url: string | null;
  videocdn: ICollapse;
  year: number;
}

interface IMovieListData {
  success: boolean;
  data: IMovie[];
}

interface IMovieData {
  success: boolean;
  data: IMovie;
}

export type { IMovieListData, IMovieData, IMovie };

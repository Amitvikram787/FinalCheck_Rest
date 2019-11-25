import { Movie } from "src/app/movies/movie.model";

export interface Favorite {
    favorites: [{
        favoriteId: string
        favorite: Movie,
        quantity?: number
    }];
    total: number;
}
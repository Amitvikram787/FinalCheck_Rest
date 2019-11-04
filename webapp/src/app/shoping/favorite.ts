
import { MovieList } from "../movie/movie.model";

export interface Favorite
{
    items:[{
        itemId:string,
        foodItem:MovieList;
        quantity?:number;
        
    }];
    total:number;
}
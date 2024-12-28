import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktailURL = '/cocktails';
  favorites = signal<string[]>([]);

  constructor(private readonly httpClient: HttpClient) {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const favoritesArray = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];
    this.favorites.set(favoritesArray);
  }

  getCocktails(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>(this.cocktailURL).pipe();
  }

  getCocktailById(cocktailId: string): Observable<Cocktail | undefined> {
    return this.getCocktails().pipe(
      map((cocktails) => cocktails.find((item) => item.id === cocktailId))
    );
  }

  isFavorite(id: string): boolean {
    return this.favorites().includes(id);
  }

  toggleFavorite(id: string): void {
    const currentFavorites = this.favorites();
    if (currentFavorites.includes(id)) {
      const updatedFavorites = currentFavorites.filter((item) => item !== id);
      this.favorites.set(updatedFavorites);
    } else {
      const updatedFavorites = [...currentFavorites, id];
      this.favorites.set(updatedFavorites);
    }

    localStorage.setItem('favorites', JSON.stringify(this.favorites()));
  }
}

import {
  Component,
  computed,
  inject,
  Input,
  Signal,
  signal,
} from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';
import { CocktailService } from '../shared/services/cocktail.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
})
export class CocktailCardComponent {
  @Input() cocktail!: Cocktail;

  cocktailService = inject(CocktailService);

  favorites = signal<string[]>([]);

  constructor() {
    this.favorites = this.cocktailService.favorites;
  }

  isFavorite: Signal<boolean> = computed(() =>
    this.favorites().includes(this.id)
  );

  toggleFavorite() {
    this.cocktailService.toggleFavorite(this.id);
  }

  // Getter and Setters
  get imageSrc(): string {
    return this.cocktail.imageUrl;
  }

  get ingredients(): string[] {
    return this.cocktail.ingredients;
  }

  get instructions(): string {
    return this.cocktail.instructions;
  }

  get cocktailName(): string {
    return this.cocktail.name;
  }

  get id(): string {
    return this.cocktail.id;
  }

  get Alcoholic(): string {
    return this.cocktail.isAlcoholic ? 'Alcoholic' : 'Non alcoholic';
  }

  get isAlcoholic(): boolean {
    return this.cocktail.isAlcoholic;
  }
}

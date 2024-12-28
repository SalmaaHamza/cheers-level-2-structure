import {
  Component,
  computed,
  inject,
  Input,
  Signal,
  signal,
} from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';
import { Cocktail } from '../shared/models/cocktail.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  @Input('id')
  id: string = '';

  cocktailService = inject(CocktailService);
  cocktail$: Observable<Cocktail | undefined>;
  favorites = signal<string[]>([]);

  getAlcoholic(isAlcoholic:boolean): string {
    return isAlcoholic ? 'Alcoholic' : 'Non alcoholic';
  }

  isFavorite: Signal<boolean> = computed(() =>
    this.favorites().includes(this.id)
  );

  toggleFavorite() {
   this.cocktailService.toggleFavorite(this.id);
  }

  ngOnInit(): void {
    this.cocktail$ = this.cocktailService.getCocktailById(this.id);
    this.favorites = this.cocktailService.favorites;
  }
}

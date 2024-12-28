import { Component, inject } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';
import { CommonModule } from '@angular/common';
import { CocktailCardComponent } from "../cocktail-card/cocktail-card.component";
import { Observable } from 'rxjs';
import { Cocktail } from '../shared/models/cocktail.model';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../shared/pipes/filter.pipe";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, CocktailCardComponent, FormsModule, FilterPipe],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  private readonly cocktailService: CocktailService = inject(CocktailService);
  cocktails$ :Observable<Cocktail[]> ;
  searchText:string;
  ngOnInit(){
    this.cocktails$ = this.cocktailService.getCocktails();
  }
}

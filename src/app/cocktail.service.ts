import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

getCocktails(): Cocktail[] {
  
  return [
    { name: 'Mojito', price: 8, image: 'mojito.jpg' },
    { name: 'Cosmo', price: 10, image: 'cosmo.jpg' },
    { name: 'Pina Colada', price: 12, image: 'pina.jpg' },
    
  ];
}
}

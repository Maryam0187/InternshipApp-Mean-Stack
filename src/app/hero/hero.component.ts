import { Component, OnInit } from '@angular/core';
import {HeroClass} from '../HeroClass';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  /** HeroObj:HeroClass={id: 1,name: 'Windstorm'};
  selectedHero: HeroClass;*/
  heroes:HeroClass[];
  constructor(private heroService:HeroService) {

/**While you could call getHeroes() in the constructor, that's not the best practice. */
   }
  /** onSelect(hero: HeroClass): void {
  this.selectedHero = hero;
}*/

  ngOnInit() {
    this.getHeroes();
    
  }
  
  getHeroes():void{
    this.heroService.getHeroes().subscribe(hero=>this.heroes = hero);
    
  }
}

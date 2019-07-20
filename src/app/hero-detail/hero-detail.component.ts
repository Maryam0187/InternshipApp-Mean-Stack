import { Component, OnInit,Input } from '@angular/core';
import {HeroClass} from '../HeroClass'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /** @Input() hero means that hero is a variable that is being passed on to this component from it's parent.  @Input() hero: HeroClass;*/
  hero: HeroClass;
  
  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 

  updateHero(): void {
    this.heroService.updateHero(this.hero);
  }
  goBack(): void {
    this.location.back();
  }
}
/**The HeroDetailComponent needs a new way to obtain the hero-to-display.

Get the route that created it,
Extract the id from the route
Acquire the hero with that id from the server via the HeroService */
import { Injectable } from '@angular/core';
import {HeroClass} from './HeroClass';
import {HEROES} from './HeroList';
import  {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
/**Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service. */
export class HeroService {
/**The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
That won't work when the HeroService is actually making requests of a remote server.
The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property. */
uri = 'http://localhost:8080';
constructor(private http: HttpClient) { }
getHeroes():Observable<HeroClass[]>{
  return of(HEROES);
}  
getHero(id: number): Observable<HeroClass> {
  // TODO: send the message _after_ fetching the hero
  return of(HEROES.find(hero => hero.id === id));
}
updateHero(hero:HeroClass):void{
  //Send Request to Node
  //,{responseType:'text'}
  //this.http.post(`${this.uri}/update`,hero,{responseType:'text'})
  //.subscribe(res => console.log(res));
 this.http.get(`${this.uri}/get`)
  .subscribe(res => console.log(res));
}
}

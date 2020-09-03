import { Injectable } from '@angular/core';
import {Planet} from '../planet'
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  solarSystem: Planet [] = [ 
  new Planet("Mercury", 0, 57909000),new Planet("Venus", 0, 108160000), new Planet("Earth", 1, 149600000)
  , new Planet("Mars", 2, 4227990000), new Planet("Jupiter", 72, 778360000), new Planet("Saturn", 62, 1433500000)
  , new Planet("Uranus", 27, 2872400000), new Planet("Neptune", 14, 4498400000)
  ]
  constructor() { }

  public addPlanet(name: string, moons: number, distanceFromSun: number){
    let bob = new Planet(name,moons,distanceFromSun);
    this.solarSystem.push(bob);
  }

  public sortDistanceFromSun (){
    this.solarSystem.sort((a,b)=> {
      if (a.distanceFromSun == b.distanceFromSun)
      return 0;
      else
      {
          if(a.distanceFromSun > b.distanceFromSun)
          return 1;
          else if (a.distanceFromSun < b.distanceFromSun)
          return -1;
      }
    })
  }
}

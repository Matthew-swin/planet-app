import { Injectable } from '@angular/core';
import {Planet} from '../planet'
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  solarSystem: Planet [] = [ 
  new Planet("Mercury", 0, 57909000,"assets/Mercury.png")
  ,new Planet("Venus", 0, 108160000, "assets/Venus.png") 
  ,new Planet("Earth", 1, 149600000, "https://i.pinimg.com/originals/ab/a5/bd/aba5bdbb6a5985ffdf4a73d1729b609a.png")
  , new Planet("Mars", 2, 4227990000, "https://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png")
  , new Planet("Jupiter", 72, 778360000, "https://vignette.wikia.nocookie.net/tys-imagination/images/a/af/Png-jupiter-jupiter-500.png/revision/latest?cb=20190515224257")
  , new Planet("Saturn", 62, 1433500000, "assets/Saturn1.png")
  , new Planet("Uranus", 27, 2872400000, "https://img.pngio.com/collection-of-free-planets-transparent-uranus-download-on-ui-ex-uranus-transparent-475_467.png")
  , new Planet("Neptune", 14, 4498400000, "https://upload.wikimedia.org/wikipedia/commons/2/20/Neptune_cutout.png")
  ]
  constructor() { }

  public addPlanet(name: string, moons: number, distanceFromSun: number, Url: string){
    let bob = new Planet(name,moons,distanceFromSun,Url);
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

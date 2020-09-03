import { Injectable } from '@angular/core';
import {Planet} from '../planet'
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  solarSystem: Planet [] = [ 
  new Planet("Mercury", 0, 57909000,"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/taiuwp1jeb3oj1ie_1592286163.jpeg?tr=w-1242,h-710,f-jpeg")
  ,new Planet("Venus", 0, 108160000, "https://miro.medium.com/max/3840/1*bzki-HmkjrhNPToll10Wpw.jpeg") 
  ,new Planet("Earth", 1, 149600000, "https://upload.wikimedia.org/wikipedia/commons/6/67/Apollo_17_Image_Of_Earth_From_Space.jpeg")
  , new Planet("Mars", 2, 4227990000, "https://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/12510/full_jpg.jpg")
  , new Planet("Jupiter", 72, 778360000, "https://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/19383/full_jpg.jpg")
  , new Planet("Saturn", 62, 1433500000, "https://solarsystem.nasa.gov/system/downloadable_items/579_210_PIA21046.jpg")
  , new Planet("Uranus", 27, 2872400000, "https://solarsystem.nasa.gov/system/downloadable_items/447_Hubble_Uranus.jpg")
  , new Planet("Neptune", 14, 4498400000, "https://solarsystem.nasa.gov/system/downloadable_items/810_PIA01492.jpg")
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

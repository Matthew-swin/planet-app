import { Component, OnInit, Input } from '@angular/core';
import { PlanetService } from '../planet-services/planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {


  public PlanetService: PlanetService;
  constructor(PlanetService: PlanetService) {
    this.PlanetService = PlanetService;
  }

  @Input()
  Planet: Planet;

  public editing: boolean = false;

  ngOnInit(): void {
  }

  DeletePlanet(name: string) {

    for (var i = 0; i < this.PlanetService.solarSystem.length; i++) {

      if (this.PlanetService.solarSystem[i]["name"] == name) {
        this.PlanetService.solarSystem.splice(i, 1);
      }
    }

  }

  startEditing(){
  this.editing = true;
  }

  stopEditing(name:string, moons:number, distance:number, Url: string){
    this.editing = false;
    this.Planet.name = name;
    this.Planet.moons = moons;
    this.Planet.distanceFromSun = distance;
    this.Planet.Url = Url;
    this.PlanetService.sortDistanceFromSun();
  }
}

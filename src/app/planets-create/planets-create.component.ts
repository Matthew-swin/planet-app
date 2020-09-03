import { Component, OnInit, Input } from '@angular/core';
import {PlanetService} from '../planet-services/planet.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {



  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

  public CreatePlanet(name:string, moons: 0, distance:number){
  this.PlanetService.addPlanet(name,moons,distance);
  this.PlanetService.sortDistanceFromSun();
  }
}

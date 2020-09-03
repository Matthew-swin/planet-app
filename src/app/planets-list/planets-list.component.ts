import { Component, OnInit, Input } from '@angular/core';
import {PlanetService} from '../planet-services/planet.service';



@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

 

  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

  



}

import { Component, OnInit } from '@angular/core';
import { PlanetServService } from '../planet-serv.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-gui',
  templateUrl: './planet-gui.component.html',
  styleUrls: ['./planet-gui.component.css']
})
export class PlanetGuiComponent implements OnInit {

  planets: Planet[];
  wantedPlanets: string[] = ['mercure', 'venus', 'terre', 'mars', 'jupiter', 'saturne', 'uranus', 'neptune'];

  constructor(private planetServService: PlanetServService) { }

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets(): void {
    this.planetServService.getPlanets().subscribe(Planet => this.planets = Planet);
  }



}

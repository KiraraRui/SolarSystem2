import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/planet';
import { PlanetServService } from '../planet-serv.service';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {


  @Input('planet') planetinput: Planet;
  isHide = true;
  selectedPlanet = { "name": "." };
  constructor() {
  }


  ngOnInit(): void {
    this.planetinput.src = '../../../assets/' + this.planetinput.name + 'Off.png';
  }

  onClick() {
    if (this.planetinput.src == '../../../assets/' + this.planetinput.name + 'Off.png') {
      this.planetinput.src =
        '../../../assets/' + this.planetinput.name + 'On.png';
      this.selectedPlanet = this.planetinput;
      this.isHide = false;

    } else {
      this.planetinput.src =
        '../../../assets/' + this.planetinput.name + 'Off.png';
      this.isHide = true;
    }

  }
}
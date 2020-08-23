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

  constructor() {
    console.log(this.ImagePath);
  }

  ImagePath: string;

  ngOnInit(): void {
    this.ImagePath = '../../../assets/' + this.planetinput.name + 'Off.png';
  }

  onClick() {
    if (this.ImagePath.endsWith('Off.png')) {
      this.ImagePath =
        '../../../assets/' + this.planetinput.name + 'On.png';
    } else {
      this.ImagePath =
        '../../../assets/' + this.planetinput.name + 'Off.png';
    }
  }
}

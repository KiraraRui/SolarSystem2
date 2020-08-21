import { Component, OnInit } from '@angular/core';
import { PlanetServService } from '../planet-serv.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-gui',
  templateUrl: './planet-gui.component.html',
  styleUrls: ['./planet-gui.component.css']
})
export class PlanetGuiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

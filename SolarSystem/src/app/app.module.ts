import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetGuiComponent } from './planet-gui/planet-gui.component';
import { PlanetComponent } from './planet/planet.component';
import { HttpClientModule } from '@angular/common/http'
import { PlanetServService } from './planet-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    PlanetGuiComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private service: PlanetServService) {
  }
}

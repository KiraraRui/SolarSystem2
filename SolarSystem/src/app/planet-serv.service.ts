import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Planet } from './planet';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetServService {
  constructor(private httpClient: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.httpClient.get<Planet[]>('https://dry-plains-91502.herokuapp.com/planets');
  }
}




/*
It says in their documentation in tour of heroes in chap 6 , it says that i should not sub but i can pipe - i quote
"{Things go wrong, especially when you're getting data from a remote server. The HeroService.getHeroes() method should catch errors and do something appropriate.
To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
Import the catchError symbol from rxjs/operators, along with some other operators you'll need later.}"






Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System.

Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon

Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. Earth is the fifth largest of the planets in the solar system.

Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.


Jupiter is called a gas giant planet. Its atmosphere is made up of mostly hydrogen gas and helium gas, like the sun. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes.

Saturn is a gas giant made up mostly of hydrogen and helium, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water.

Uranus is blue-green in color, as a result of the methane in its mostly hydrogen-helium atmosphere. The planet is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice

Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus.

// brug https://angular.io/tutorial/toh-pt4

9/27
*/
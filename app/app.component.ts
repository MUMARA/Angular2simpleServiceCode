import { Component } from '@angular/core';
import {HeroService} from './myservice';
@Component({
  selector: 'my-app',
  template:``
  ,providers:[HeroService]
})
export class AppComponent  {
  constructor(heroService: HeroService) {
    console.log(heroService.myname,heroService.a());
  }

}

import {Component, Input,OnInit} from '@angular/core';
import { Router , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams } from '@angular/router-deprecated';
@Component({
  selector: 'my-app',
  templateUrl: 'app/build.component.html',
  providers: [
  ROUTER_PROVIDERS
  ]

})
export class BuildComponent implements OnInit {
constructor(
  private router: Router,
  private routeParams:RouteParams
  ) {
}
  ngOnInit() {
  }
}

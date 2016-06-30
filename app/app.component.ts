import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {BuildComponent} from './build.component';
import {DashboardComponent} from './dashboard.component';

import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
    <nav>
     <a [routerLink]="['Dashboard']">Dashboard</a>
     <a [routerLink]="['Build',{heroid:1,sidekickid:1}]">Heroes</a>
    </nav>
  <router-outlet></router-outlet>
  `,

  directives: [ROUTER_DIRECTIVES],

  providers: [
  ROUTER_PROVIDERS,
  ]

})

@RouteConfig([   
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
  {
  //path: '/build',
  path: '/build/:heroid/:sidekickid',
  name: 'Build',
  component: BuildComponent,
}

])

export class AppComponent {
}

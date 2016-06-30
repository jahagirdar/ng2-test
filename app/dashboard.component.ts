import {Component, OnInit} from '@angular/core';
import {BuildComponent} from './build.component';
import { Router , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  directives: [BuildComponent,ROUTER_DIRECTIVES],
  templateUrl: 'app/dashboard.component.html',
  providers: [
  ROUTER_PROVIDERS
  ]

})
export class DashboardComponent implements OnInit {
constructor(
  private router: Router
  ) {
}

  ngOnInit() {
  }
  heroes=[
  {
  id:0,
  Name:"Foo",
  LastMission:"2016"
  },
  {
  id:1,
  Name:"Bar",
  LastMission:"2015"
  }
  ]
  gotoDetail(hero:any){
  let link = ['Build', { heroid: hero.id,sidekickid:1 }];
  this.router.navigate(link);
  console.log("d.c: link",link);
  }
}

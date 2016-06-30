import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  directives: [CHART_DIRECTIVES],
  templateUrl:'app/app.component.html',
  styles:[' .chart {display: block; width: 100%;} ']
})
export class AppComponent {
}

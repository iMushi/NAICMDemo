import { Component } from '@angular/core';
import { GLOBAL } from "./common/global";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){

  	console.log("using====>" + GLOBAL.RESTAPINJS);

  }
}

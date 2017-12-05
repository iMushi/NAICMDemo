import { Component, OnInit } from '@angular/core';
import {PrestoService} from "../../common/presto.service";

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {

  constructor(private _prestoService : PrestoService) { }

  ngOnInit() {

	  this._prestoService.setBreadCrumb([]);
  }

}

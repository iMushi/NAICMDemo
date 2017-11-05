import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageRouting } from "./blank-page.routing";
import {BlankPageComponent} from "./blank-page.component";


@NgModule({
  imports: [
    CommonModule,
    BlankPageRouting
  ],
  declarations: [
    BlankPageComponent
  ]
})
export class BlankPageModule { }



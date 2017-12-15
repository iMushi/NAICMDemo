import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpperCaseTextDirective} from "../../directives/upper-case-text.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpperCaseTextDirective],
	exports:[UpperCaseTextDirective]
})
export class SharedModulesModule { }

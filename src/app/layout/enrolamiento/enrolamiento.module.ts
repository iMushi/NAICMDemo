import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnrolamientoRouting} from "./enrolamiento-routing";
import {EnrolamientoComponent} from "./enrolamiento.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	imports: [
		CommonModule,
		EnrolamientoRouting,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		EnrolamientoComponent
	]
})
export class EnrolamientoModule {
}

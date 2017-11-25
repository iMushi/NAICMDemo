import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnrolamientoRouting} from "./enrolamiento-routing";
import {EnrolamientoComponent} from "./enrolamiento.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxQRCodeModule } from 'ngx-qrcode2';

import {EnrolamientoGuard} from "../../auth/enrolamiento.guard";

@NgModule({
	imports: [
		CommonModule,
		EnrolamientoRouting,
		FormsModule,
		ReactiveFormsModule,
		NgxQRCodeModule
	],
	declarations: [
		EnrolamientoComponent
	],
	providers:[EnrolamientoGuard]
})
export class EnrolamientoModule {
}

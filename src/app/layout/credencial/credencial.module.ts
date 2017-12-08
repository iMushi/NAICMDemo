import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CredencialComponent} from "./credencial.component";
import {NgxQRCodeModule} from "ngx-qrcode2";


@NgModule({
	imports: [
		CommonModule,
		NgxQRCodeModule
	],
	declarations: [CredencialComponent],
	exports:[CredencialComponent]
})
export class CredencialModule {
}

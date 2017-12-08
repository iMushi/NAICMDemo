import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImpresionRouting} from "./impresion-routing";
import {ImpresionComponent} from "./impresion.component";
import {CredencialModule} from "../credencial/credencial.module";

@NgModule({
	imports: [
		CommonModule,
		ImpresionRouting,
		CredencialModule
	],
	declarations: [ImpresionComponent]
})
export class ImpresionModule {
}

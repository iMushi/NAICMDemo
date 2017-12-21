import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModulesModule} from "../shared-modules/shared-modules.module";
import {CargamasivaComponent} from './cargamasiva.component';
import {CargamasivaRouting} from "./cargamasiva-routing";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
	imports: [
		CommonModule,
		SharedModulesModule,
		FormsModule,
		ReactiveFormsModule,
		CargamasivaRouting,
		NgxPaginationModule
	],
	declarations: [CargamasivaComponent]
})
export class CargamasivaModule {
}

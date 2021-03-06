import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusquedaRouting} from "./busqueda-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BusquedaComponent} from "./busqueda.component";
import {NgxTypeaheadModule} from "ngx-typeahead";
import {SharedModulesModule} from "../shared-modules/shared-modules.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BusquedaRouting,
		NgxTypeaheadModule,
		SharedModulesModule
	],
	declarations: [BusquedaComponent]
})
export class BusquedaModule {
}

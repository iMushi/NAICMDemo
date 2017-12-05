import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusquedaRouting} from "./busqueda-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BusquedaComponent} from "./busqueda.component";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BusquedaRouting
	],
	declarations: [BusquedaComponent]
})
export class BusquedaModule {
}

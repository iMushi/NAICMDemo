import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderComponent} from './header/header.component';
import {PrestoService} from "../common/presto.service";
import { BusquedaRapidaComponent } from './busqueda-rapida/busqueda-rapida.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutRoutingModule
	],
	declarations: [
		LayoutComponent,
		HeaderComponent,
		BusquedaRapidaComponent
	],

	providers: [
		PrestoService
	]
})

export class LayoutModule {
}

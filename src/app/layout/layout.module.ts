import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderComponent} from './header/header.component';
import {PrestoService} from "../common/presto.service";
import {BusquedaRapidaComponent} from './busqueda-rapida/busqueda-rapida.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [
		CommonModule,
		LayoutRoutingModule,
		NgxPaginationModule,
		FormsModule
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

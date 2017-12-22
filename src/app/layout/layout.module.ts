import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderComponent} from './header/header.component';
import {PrestoService} from "../common/presto.service";
import {BusquedaRapidaComponent} from './busqueda-rapida/busqueda-rapida.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {SharedModulesModule} from "./shared-modules/shared-modules.module";
import { ModalMsgComponent } from './modal-msg/modal-msg.component';
import {MsgService} from "../common/msg.service";

@NgModule({
	imports: [
		CommonModule,
		LayoutRoutingModule,
		NgxPaginationModule,
		FormsModule,
		SharedModulesModule
	],
	declarations: [
		LayoutComponent,
		HeaderComponent,
		BusquedaRapidaComponent,
		ModalMsgComponent
	],

	providers: [
		PrestoService, MsgService
	]
})

export class LayoutModule {
}

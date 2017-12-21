import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModulesModule} from "../shared-modules/shared-modules.module";

import {ListadoEventualesComponent} from "./listado-eventuales.component";
import {ListadoEventualesRouting} from "./listadoEventuales-routing";

import {NgxPaginationModule} from "ngx-pagination";
import {SafeHtmlPipe} from "../../pipes/safe-html.pipe";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModulesModule,
		ListadoEventualesRouting,
		NgxPaginationModule
	],
	declarations: [ListadoEventualesComponent,SafeHtmlPipe]
})
export class ListadoEventualesModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageEnrolamientoComponent} from './manage-enrolamiento.component';
import {SharedModulesModule} from "../shared-modules/shared-modules.module";
import {ManageEnrolamientoRouting} from "./manage-enrolamiento.routing";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
	imports: [
		CommonModule,
		SharedModulesModule,
		ManageEnrolamientoRouting,
		NgxPaginationModule
	],
	declarations: [ManageEnrolamientoComponent]
})
export class ManageEnrolamientoModule {
}

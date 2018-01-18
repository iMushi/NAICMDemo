import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventualComponent} from "./eventual.component";
import {EventualRouting} from "./eventual-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModulesModule} from "../shared-modules/shared-modules.module";
import {NgxTypeaheadModule} from "ngx-typeahead";
import { BusyModule } from 'angular2-busy';

@NgModule({
	imports: [
		CommonModule,
		EventualRouting,
		FormsModule,
		ReactiveFormsModule,
		SharedModulesModule,
		NgxTypeaheadModule,
		BusyModule
	],
	declarations: [EventualComponent]
})
export class EventualModule {
}

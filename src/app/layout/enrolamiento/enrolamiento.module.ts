import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnrolamientoRouting} from './enrolamiento-routing';
import {EnrolamientoComponent} from './enrolamiento.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EnrolamientoGuard} from '../../auth/enrolamiento.guard';
import {CredencialModule} from '../credencial/credencial.module';
import {SharedModulesModule} from '../shared-modules/shared-modules.module';
import { BusyModule } from 'angular2-busy';

@NgModule({
	imports: [
		CommonModule,
		EnrolamientoRouting,
		FormsModule,
		ReactiveFormsModule,
		CredencialModule,
		SharedModulesModule,
		BusyModule
	],
	declarations: [
		EnrolamientoComponent
	],
	providers: [EnrolamientoGuard]
})
export class EnrolamientoModule {
}

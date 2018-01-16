import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolamientoComponent } from './enrolamiento.component';
import {EnrolamientoGuard} from '../../auth/enrolamiento.guard';

const routes: Routes = [
	{ path: '', component: EnrolamientoComponent , canActivate: [EnrolamientoGuard]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EnrolamientoRouting { }

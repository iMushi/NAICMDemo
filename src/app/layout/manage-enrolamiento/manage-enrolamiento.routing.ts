import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ManageEnrolamientoComponent} from "./manage-enrolamiento.component";

const routes: Routes = [
	{ path: '', component: ManageEnrolamientoComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageEnrolamientoRouting { }

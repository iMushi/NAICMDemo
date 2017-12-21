import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListadoEventualesComponent} from "./listado-eventuales.component";

const routes: Routes = [
	{ path: '', component: ListadoEventualesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListadoEventualesRouting { }

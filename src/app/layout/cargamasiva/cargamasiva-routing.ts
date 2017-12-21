import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CargamasivaComponent} from "./cargamasiva.component";

const routes: Routes = [
	{ path: '', component: CargamasivaComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CargamasivaRouting { }

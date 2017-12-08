import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpresionComponent} from "./impresion.component";


const routes: Routes = [
	{ path: '', component: ImpresionComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ImpresionRouting { }

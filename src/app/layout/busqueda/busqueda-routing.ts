import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from "./busqueda.component"

const routes: Routes = [
	{ path: '',   component: BusquedaComponent,

		children:[
			{path: 'list', loadChildren: '../manage-enrolamiento/manage-enrolamiento.module#ManageEnrolamientoModule'}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BusquedaRouting { }

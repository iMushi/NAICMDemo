import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
	{
		path: '', component: LayoutComponent,

		children: [
			{path: '', loadChildren: './blank-page/blank-page.module#BlankPageModule' , canActivate: [AuthGuard]},
			{path: 'enrolamiento', loadChildren: './enrolamiento/enrolamiento.module#EnrolamientoModule', canActivate: [AuthGuard]},
			{path: 'eventual', loadChildren: './eventual/eventual.module#EventualModule', canActivate: [AuthGuard]},
			{path: 'listadoEventuales', loadChildren: './listado-eventuales/listado-eventuales.module#ListadoEventualesModule', canActivate: [AuthGuard]},
			{path: 'imprimir', loadChildren: './impresion/impresion.module#ImpresionModule', canActivate: [AuthGuard]},
			{path: 'cargamasiva', loadChildren: './cargamasiva/cargamasiva.module#CargamasivaModule', canActivate: [AuthGuard]},
			{path: 'busqueda/:searchType', loadChildren: './busqueda/busqueda.module#BusquedaModule', canActivate: [AuthGuard]},
			{path: 'login', loadChildren:'./login/login.module#LoginModule'},
			{path: '**', component: NotFoundComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	declarations: [NotFoundComponent],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
}

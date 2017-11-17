import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
	{
		path: '', component: LayoutComponent,

		children: [
			{
				path: 'main', loadChildren: './blank-page/blank-page.module#BlankPageModule'
			},
			{
				path: 'enrolamiento', loadChildren: './enrolamiento/enrolamiento.module#EnrolamientoModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
}

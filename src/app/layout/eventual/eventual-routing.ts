import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventualComponent} from "./eventual.component";

const routes: Routes = [
	{ path: '', component: EventualComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EventualRouting { }

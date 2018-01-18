import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { CargamasivaComponent } from './cargamasiva.component';
import { CargamasivaRouting } from './cargamasiva-routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BusyModule } from 'angular2-busy';

@NgModule({
	imports: [
		CommonModule,
		SharedModulesModule,
		FormsModule,
		ReactiveFormsModule,
		CargamasivaRouting,
		NgxPaginationModule,
		BusyModule
	],
	declarations: [CargamasivaComponent]
})
export class CargamasivaModule {
}

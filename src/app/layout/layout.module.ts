import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderComponent} from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ]
})

export class LayoutModule {
}

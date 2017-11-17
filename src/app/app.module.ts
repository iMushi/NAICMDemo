import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing';
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule,
		FormsModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {
}

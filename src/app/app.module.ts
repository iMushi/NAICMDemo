import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./auth/auth.guard";
import {AuthService} from "./common/auth.service";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule,
		FormsModule,
		HttpClientModule
	],
	providers: [AuthGuard,AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
}

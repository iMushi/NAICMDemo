import {Component, DoCheck,OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {Subscription} from "rxjs/Subscription";
import {TBreaCrumb} from "../../models/interface";
import {AuthService} from "../../common/auth.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers : [AuthService]
})
export class HeaderComponent implements OnInit, OnDestroy, DoCheck {

	ngDoCheck(): void {
		this.identity = this._authService.getIdentity();
	}


	@ViewChild('appBread', {read: ViewContainerRef}) appBread: ViewContainerRef;
	@ViewChild('breadTpl', { read: TemplateRef }) breadTpl: TemplateRef<any>;

	public unsubscriber: Subscription;
	public identity = null;


	constructor(private _prestoService: PrestoService, private _authService : AuthService, private _router : Router) {
		this.identity = this._authService.getIdentity();
	}

	ngOnInit() {

		this.unsubscriber = this._prestoService.breadEmitted$.subscribe(
			breadArray => {
				this.updateBread(breadArray);
			},
			error => console.log(error)
		);
	}

	ngOnDestroy(): void {
		this.unsubscriber.unsubscribe();
	}


	openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("mainDiv").style.marginLeft = "270px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mainDiv").style.marginLeft = "0";
		document.body.style.backgroundColor = "white";
	}

	updateBread(params: Array<TBreaCrumb>) {

		let breadInit: Array<TBreaCrumb> = [{
			routerLink: "/",
			txt : "NAICM",
			class:""
		}, ...params];

		this.appBread.clear();

		breadInit.map(
			el => {
				this.appBread.createEmbeddedView( this.breadTpl, {$implicit: el} );
			}
		);


	}

	logout (){
		this._authService.logout().subscribe(
			logout => {
				this._router.navigate(['/login']);
			},
			error =>{
				console.log(error);
			}
		);
	}

	keyPressBuscar(...eve) {

		if (eve[0].keyCode === 13) {
			this.buscarPorNombre(eve[1].value);
		}
		return true;
	}

	buscarPorNombre(value) {
		this._prestoService.getEnrolamientoByName(value.split(",")
			.map(val => val.trim()));
	}

}

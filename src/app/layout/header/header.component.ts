import { Component, DoCheck, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PrestoService } from '../../common/presto.service';
import { Subscription } from 'rxjs/Subscription';
import { TBreaCrumb } from '../../models/interface';
import { AuthService } from '../../common/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [AuthService]
})

export class HeaderComponent implements OnInit, OnDestroy, DoCheck {

	@ViewChild('appBread', {read: ViewContainerRef}) appBread: ViewContainerRef;
	@ViewChild('breadTpl', {read: TemplateRef}) breadTpl: TemplateRef<any>;
	public unsubscriber: Subscription;
	public identity = null;
	public nombreSearch = '';

	constructor(private _prestoService: PrestoService, private _authService: AuthService, private _router: Router) {
		this.identity = this._authService.getIdentity();
	}

	ngDoCheck(): void {
		this.identity = this._authService.getIdentity();


		if (this.identity == null && this._router.url !== '/login') {
			this._router.navigate(['/login']).then();
		}

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
		document.getElementById('mySidenav').style.width = '250px';
		document.getElementById('mainDiv').style.marginLeft = '270px';
		document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
	closeNav() {
		document.getElementById('mySidenav').style.width = '0';
		document.getElementById('mainDiv').style.marginLeft = '0';
		document.body.style.backgroundColor = 'white';
	}

	updateBread(params: Array<TBreaCrumb>) {

		const breadInit: Array<TBreaCrumb> = [{
			routerLink: '/',
			txt: 'NAICM',
			class: ''
		}, ...params];

		this.appBread.clear();

		breadInit.map(
			el => {
				this.appBread.createEmbeddedView(this.breadTpl, {$implicit: el});
			}
		);


	}

	logout() {
		this._authService.logout().subscribe(
			logged => {
				this._router.navigate(['/']);
			},
			(err: HttpErrorResponse) => {
				this._router.navigate(['/']);
			}
		);
	}

	keyPressBuscar(...eve) {

		if (eve[0].keyCode === 13) {
			this.buscarPorNombre();
		}
		return true;
	}

	buscarPorNombre() {
		this._prestoService.getEnrolamientoByName(this.nombreSearch.split(',').map(val => val.trim()), 1);
	}

}

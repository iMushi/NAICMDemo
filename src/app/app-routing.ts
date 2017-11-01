import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";


const routes: Routes = [
  { path: ''
    , loadChildren: './layout/layout.module#LayoutModule'
    , canActivate:[AuthGuard]
  },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

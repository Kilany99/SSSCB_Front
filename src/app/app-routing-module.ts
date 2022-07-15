import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/home/home-component';
import { AuthGuard } from 'src/app/_helpers/auth-guard';
import { ClientDetailsFormComponent } from './client-details/client-details-form/client-details-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const accountModule = () => import('src/app/account/account-module').then(x => x.AccountModule);
const usersModule = () => import('src/app/users/users-module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'client', component: ClientDetailsFormComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
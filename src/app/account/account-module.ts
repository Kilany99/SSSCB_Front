import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from 'src/app/account/account-routing-module';
import { LayoutComponent } from 'src/app/account/layout-component';
import { LoginComponent } from 'src/app/account/login-component';
import { RegisterComponent } from 'src/app/account/register-component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AccountModule { }
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from 'src/app/users/users-routing-module';
import { LayoutComponent } from 'src/app/users/layout-component';
import { ListComponent } from 'src/app/users/list-component';
import { AddEditComponent } from 'src/app/users/add-edit-component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
})
export class UsersModule { }
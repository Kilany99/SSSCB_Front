import { Component } from '@angular/core';

import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account-service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
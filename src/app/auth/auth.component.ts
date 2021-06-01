import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent{
    isLoginMode: boolean = true;
    isLoading:boolean = false;
    error: string = '';
    

    constructor(private authService: AuthService, private router: Router) {}

    onSubmitMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(responseData => {
                this.isLoading = false;
                this.router.navigate(['todo/category']);
                console.log(responseData);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage.error.error.message;
                this.isLoading = false;
              }
            )

        } else {
            this.authService.signUp(email, password).subscribe(responseData => {
                this.isLoading = false;
                this.router.navigate(['todo/category']);
                console.log(responseData);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage.error.error.message;
                this.isLoading = false;
              }
            )
        }
        form.reset();
    }
}
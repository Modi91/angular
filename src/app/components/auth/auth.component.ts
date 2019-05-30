import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(username, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        errorRes => {
          console.log(errorRes.error.errorMessage);
          if (errorRes.error.errorMessage) {
            this.error = errorRes.error.errorMessage;
          }
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signup(username, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        errorRes => {
          console.log(errorRes.error.errorMessage);
          if (errorRes.error.errorMessage) {
            this.error = errorRes.error.errorMessage;
          }
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}

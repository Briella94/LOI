import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';
  public LocalStorage: any;
  private readonly returnUrl: string;
  loggedin: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/dashboard-component';
  }

  public onSubmit(): void {
  this.loginValid = true;
  let email = "nathaliefijan@loi.com";
  let password = "Welkom2022-01"
  
    if (this.username == email && password == this.password) {
      localStorage.setItem("is_loggedin", "yes");
      this._router.navigateByUrl(this.returnUrl);
    } else {
      console.log("Invalid username and password");
    }
  }
 }
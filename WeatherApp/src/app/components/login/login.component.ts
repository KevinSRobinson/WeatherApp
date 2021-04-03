import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/weather']);

      //this.alertifyService.success('Logged in ');
    }, error => {
      console.log(error);
      //this.alertifyService.error(error.message);
    });
  }
}

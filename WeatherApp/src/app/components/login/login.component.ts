import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(
    public authService: AuthService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/weather']);
      this.toastr.success("Logged in Successfully");
      //this.alertifyService.success('Logged in ');
    }, error => {
      console.log(error);
      this.toastr.error("Invalid User Naame and password");
    });
  }
}

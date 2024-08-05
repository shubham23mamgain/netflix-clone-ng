import { Component, inject } from '@angular/core';
import { BACKGROUND_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgImgUrl = BACKGROUND_URL;

  email!: string;
  password!: string;

  loginService = inject(LoginService);
  router = inject(Router);
  toastrService = inject(ToastrService);

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/browse');
    }
  }

  onSubmit() {
    // validate email and password
    if (!this.email || !this.password) {
      this.toastrService.error('Provide email or password');
      return;
    }

    // if email and password is correct lets login the user
    this.loginService.login(this.email, this.password);
    this.toastrService.success("Logged in successfully");
    this.router.navigateByUrl('/browse');
  }


}

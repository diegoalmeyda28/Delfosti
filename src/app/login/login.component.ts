import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  recaptchaToken: string = '';
  showCaptcha: Boolean = false;
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  validarCaptcha() {
    this.showCaptcha = true;
  }

  resolved(captchaResponse: string) {
    this.recaptchaToken = captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  errored(captchaResponse: any) {
    console.error('Error:', captchaResponse);
  }

  logout(): void {
    this.authService.signOut();
  }

  onSubmit() {
    // Handle form submission and recaptcha validation
  }
}

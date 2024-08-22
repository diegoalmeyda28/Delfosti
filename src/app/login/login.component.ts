import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private recaptchaToken: string = '';

  constructor(private authService: SocialAuthService, private recaptchaV3Service: ReCaptchaV3Service) {}

  signInWithGoogle(): void {
    this.recaptchaV3Service.execute('login').subscribe((token) => {
      this.recaptchaToken = token;
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
        console.log('Login successful');
      }).catch(error => {
        console.error('Login error:', error);
      });
    });
  }

  resolved(captchaResponse: string) {
    this.recaptchaToken = captchaResponse;
  }

  onSubmit() {
    // Handle form submission and recaptcha validation
  }
}

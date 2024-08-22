import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { SocialAuthService } from 'angularx-social-login';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RecaptchaV3Module } from 'ng-recaptcha'; // Importa el módulo

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RecaptchaV3Module
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, // Habilita auto login si lo prefieres
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('74571265744-kbqjbs75ci4il0facpk3043njp0m8n44.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

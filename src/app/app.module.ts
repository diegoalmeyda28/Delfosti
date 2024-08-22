import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha'; // Importa el módulo
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

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
    RecaptchaModule
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
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6LczrMsiAAAAAE47XMqfLQ5vMXhSaDtz9G_ewA",
      } as RecaptchaSettings
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

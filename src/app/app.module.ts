import { TokenService } from './services/token-service.service';
import { AuthService } from './services/auth-service.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [    
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    
  ],
  providers: [
    AuthService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

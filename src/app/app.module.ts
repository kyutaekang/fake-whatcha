import { userInfoReducer } from './common/reducers/user-info.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainModule } from './main/main.module';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.config';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastBarComponent } from './bar/toast-bar/toast-bar.component';

import { AppComponent } from './app.component';
import { provideStore } from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToastBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    provideStore({
      userInfoReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

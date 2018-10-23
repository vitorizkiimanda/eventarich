import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreateeventPage } from '../pages/createevent/createevent';
import { TabsPage } from '../pages/tabs/tabs';
import { UploadeventPage } from '../pages/uploadevent/uploadevent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    LoginPage,
    RegisterPage,
    CreateeventPage,
    UploadeventPage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    LoginPage,
    RegisterPage,
    CreateeventPage,
    UploadeventPage,

    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

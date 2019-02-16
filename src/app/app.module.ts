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
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { TicketbuyPage } from '../pages/ticketbuy/ticketbuy';
import { PaymentPage } from '../pages/payment/payment';
import { InvoiceDetailPage } from '../pages/invoice-detail/invoice-detail';
import { Autosize } from '../directives/autosize/autosize';
import { Camera } from '@ionic-native/camera';
import { EventPacketPage } from '../pages/event-packet/event-packet';
import { EventPacketCustomizePage } from '../pages/event-packet-customize/event-packet-customize';
import { EventSearchPage } from '../pages/event-search/event-search';
import { EventkebutuhanPage } from '../pages/eventkebutuhan/eventkebutuhan';
import { ProfilePage } from '../pages/profile/profile';
import { EventpromosiPage } from '../pages/eventpromosi/eventpromosi';
import { TotalPage } from '../pages/total/total';
import { VenuecreatePage } from '../pages/venuecreate/venuecreate';
import { VenuepilihPage } from '../pages/venuepilih/venuepilih';
import { VenuedetailPage } from '../pages/venuedetail/venuedetail';
import { PesananPage } from '../pages/pesanan/pesanan';
import { StatistikPage } from '../pages/statistik/statistik';
import { ChatPage } from '../pages/chat/chat';
import { TermsPage } from '../pages/terms/terms';



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
    EventdetailPage,
    TicketbuyPage,
    PaymentPage,
    InvoiceDetailPage,
    EventPacketPage,
    EventPacketCustomizePage,
    EventSearchPage,
    ProfilePage,
    EventkebutuhanPage,
    EventpromosiPage,
    TotalPage,
    VenuecreatePage,
    VenuepilihPage,
    VenuedetailPage,
    PesananPage,
    StatistikPage,
    ChatPage,
    TermsPage,

    TabsPage,

    Autosize
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
    EventdetailPage,
    TicketbuyPage,
    PaymentPage,
    InvoiceDetailPage,
    EventPacketPage,
    EventPacketCustomizePage,
    EventSearchPage,
    ProfilePage,
    EventkebutuhanPage,
    EventpromosiPage,
    TotalPage,
    VenuepilihPage,
    VenuecreatePage,
    VenuedetailPage,
    PesananPage,
    StatistikPage,
    ChatPage,
    TermsPage,

    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StatusBar,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

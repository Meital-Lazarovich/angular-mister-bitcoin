import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactService } from './services/contact/contact.service';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './cmps/header/header.component';
import { UserService } from './services/user/user.service';
import { StorageService } from './services/storage/storage.service';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { BitcoinService } from './services/bitcoin/bitcoin.service';
import {HttpClientModule} from '@angular/common/http';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    HeaderComponent,
    SignupPageComponent,
    TransferFundComponent,
    MoveListComponent,
    MovePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    UserService,
    StorageService,
    BitcoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

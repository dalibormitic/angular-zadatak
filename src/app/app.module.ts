import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ListViewComponent } from './list-view/list-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddPdfComponent } from './add-pdf/add-pdf.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ListViewComponent, HeaderComponent, AddPdfComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, PdfViewerModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

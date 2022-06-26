import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientDetailsFormComponent } from './client-details/client-details-form/client-details-form.component';
import { FormsModule } from '@angular/forms';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CamerasDetailsComponent } from './cameras-details/cameras-details.component';
import { CamerasDetailsFormComponent } from './cameras-details/cameras-details-form/cameras-details-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientDetailsFormComponent,
    ClientsListComponent,
    CamerasDetailsComponent,
    CamerasDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

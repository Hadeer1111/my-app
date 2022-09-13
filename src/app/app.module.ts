import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgModule,
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

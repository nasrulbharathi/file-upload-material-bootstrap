import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FileuploadComponent } from './fileupload/fileupload.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FileuploadComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTabsModule, MatButtonModule, MatIconModule, MatCardModule, MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './services/fake-backend.service';
import { AccountService } from './services/account.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { EditAccountDialogComponent } from './components/edit-account-dialog/edit-account-dialog.component';

// Import material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    EditAccountDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
        FakeBackendService, { dataEncapsulation: false }
    )
  ],
  providers: [AccountService],
  bootstrap: [AppComponent],
  entryComponents: [EditAccountDialogComponent]
})
export class AppModule { }

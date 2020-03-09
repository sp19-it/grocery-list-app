import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/Icon";
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';

@NgModule({
  declarations: [AppComponent, AddGroceryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule {}

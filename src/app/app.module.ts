import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';

import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';

@NgModule({
  // components (for the app to find select)
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpaces
  ],
  // external modules (for the app to run correctly in browser)
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // contains ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] // startup component
})
export class AppModule { }

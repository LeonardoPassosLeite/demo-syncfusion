import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule, GridAllModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxAllModule, RatingAllModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    PagerModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    GridAllModule,
    CommonModule,
    DialogModule,
    NumericTextBoxAllModule,
    RatingAllModule,
    CheckBoxModule,
    DatePickerAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

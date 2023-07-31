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
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService  } from '@syncfusion/ej2-angular-pdfviewer';

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
    DropDownListModule,
    NumericTextBoxAllModule,
    RatingAllModule,
    CheckBoxModule,
    DatePickerAllModule,
    DropDownButtonModule,
    PdfViewerModule 
  ],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule, NavigationService, PrintService, ToolbarService  } from '@syncfusion/ej2-angular-pdfviewer';
import {ToolbarModule} from "@syncfusion/ej2-angular-navigations";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PdfViewerModule,
        ToolbarModule,
        FormsModule
    ],
  providers: [ToolbarService, NavigationService, PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }

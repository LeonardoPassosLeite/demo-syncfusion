import {Component, OnInit, ViewChild} from '@angular/core';
import {PageChangeEventArgs, PdfViewerComponent} from "@syncfusion/ej2-angular-pdfviewer";
import {ClickEventArgs, ToolbarComponent} from '@syncfusion/ej2-angular-navigations';
import {LoadEventArgs} from "@syncfusion/ej2-angular-grids";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('pdfviewer')
  public pdfviewerControl!: PdfViewerComponent;
  @ViewChild('customToolbar')
  public customToolbar!: ToolbarComponent;
  @ViewChild('zoomToolbar')
  public zoomToolbar!: ToolbarComponent;
  public service: string =
    'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'Hive_Succinctly.pdf';

  constructor() { }
  ngOnInit(): void {
    document
      .getElementById('fileUpload')!
      .addEventListener('change', this.readFile.bind(this));
  }

  public previousClicked(e: ClickEventArgs): void {
    this.pdfviewerControl.navigation.goToPreviousPage();
  }

  public nextClicked(e: ClickEventArgs): void {
    this.pdfviewerControl.navigation.goToNextPage();
  }

  public printClicked(e: ClickEventArgs): void {
    this.pdfviewerControl.print.print();
  }

  public downloadClicked(e: ClickEventArgs): void {
    let fileName: string | undefined = (document.getElementById(
      'fileUpload'
    ) as HTMLInputElement).value
      .split('\\')
      .pop();
    if(fileName !== '') {
      this.pdfviewerControl.fileName = fileName ?? '';
    }
    this.pdfviewerControl.download();
  }

  public pageChanged(e: PageChangeEventArgs): void {
    document.getElementById('currentPage')!.textContent =
      `${this.pdfviewerControl.currentPageNumber}`;
    this.updatePageNavigation();
  }

  public documentLoaded(e: LoadEventArgs): void {
    document.getElementById('totalPage')!.textContent =
      `/ ${this.pdfviewerControl.pageCount}`;
    document.getElementById('currentPage')!.textContent =
      `${this.pdfviewerControl.currentPageNumber}`;
    this.updatePageNavigation();
  }

  public onCurrentPageBoxKeypress(e: KeyboardEvent): boolean {
    if ((e.which < 48 || e.which > 57) && e.which !== 8 && e.which !== 13) {
      e.preventDefault();
      return false;
    } else {
      const currentPageElement = document.getElementById('currentPage')!;
      let currentPageNumber: number = 0;
      if (currentPageElement.textContent) {
        currentPageNumber = parseInt(currentPageElement.textContent);
      }
      if (e.which === 13) {
        if (
          currentPageNumber > 0 &&
          currentPageNumber <= this.pdfviewerControl.pageCount
        ) {
          this.pdfviewerControl.navigation.goToPage(currentPageNumber);
        } else {
          (document.getElementById(
            'currentPage'
          )!.textContent = this.pdfviewerControl.currentPageNumber.toString());
        }
      }
      return true;
    }
  }

  private updatePageNavigation(): void {
    if(this.pdfviewerControl.currentPageNumber === 1) {
      this.customToolbar.enableItems(
        document.getElementById('previousPage')!,
        false
      );
      this.customToolbar.enableItems(document.getElementById('nextPage')!, true);
    } else if (
      this.pdfviewerControl.currentPageNumber ===
      this.pdfviewerControl.pageCount
    ) {
      this.customToolbar.enableItems(
        document.getElementById('previousPage')!,
        true
      );
      this.customToolbar.enableItems(
        document.getElementById('nextPage')!,
        false
      );
    } else {
      this.customToolbar.enableItems(
        document.getElementById('previousPage')!,
        true
      );
      this.customToolbar.enableItems(document.getElementById('nextPage')!, true);
    }
  }

  private readFile(args: any): void {
    let upoadedFiles: any = args.target.files;
    if(args.target.files[0] !== null) {
      let uploadedFile: File = upoadedFiles[0];
      if (uploadedFile) {
        let reader: FileReader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        let proxy: any = this;
        reader.onload = (e: any): void => {
          let uploadedFileUrl: string = e.currentTarget.result;
          proxy.pdfviewerControl.load(uploadedFileUrl, null);
        };
      }
    }
  }
}

import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.syncfusion.com/angular/production/';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

  title = 'demo-components-syncfusion';
  public dReady: boolean = false;
  public dtTime: boolean = false;
  public isDataBound: boolean = false;
  public isDataChanged: boolean = true;
  public intervalFun: any;
  public clrIntervalFun: any;
  public clrIntervalFun1: any;
  public clrIntervalFun2: any;
  public dropSlectedIndex: number | null = null;
  public stTime: any;
  public data: DataManager;
  public query: Query;
  public filterSettings: Object = {};;
  public selectionSettings: Object = {};
  public loadingIndicator: Object = {};
  public height: string = '240px';
  @ViewChild('sample')
  public listObj: DropDownListComponent | undefined;;
  @ViewChild('overviewgrid')
  public gridInstance: GridComponent;
  public ddlData: Object[] = [
    { text: '1,000 Rows and 11 Columns', value: '1000' },
    { text: '10,000 Rows and 11 Columns', value: '10000' },
    { text: '1,00,000 Rows and 11 Columns', value: '100000' }
  ];
  public fields: Object = { text: 'text', value: 'value' };
  public item: number[] = [1, 2, 3, 4, 5];

  constructor() {
    this.data = new DataManager();
    this.query = new Query();
    this.gridInstance = {} as GridComponent;
  }

  public ngOnInit(): void {
    this.data = new DataManager({ url: SERVICE_URI + 'api/UrlDataSource', adaptor: new UrlAdaptor });
    this.query = new Query().addParams('dataCount', '1000');
    this.filterSettings = { type: "Menu" };
    this.loadingIndicator = { indicatorType: 'Shimmer' };
    this.stTime = performance.now();
    this.selectionSettings = { persistSelection: true, type: "Multiple", checkboxOnly: true };

  }

  ngAfterViewInit(args: any): void {
    this.gridInstance.on('data-ready', () => {
      this.dReady = true;
    });
    document.getElementById('overviewgrid')?.addEventListener('DOMSubtreeModified', () => {
      if (this.stTime && this.isDataChanged) {
        const msgEle = document.getElementById('msg');
        if (msgEle) {
          const val: any = (performance.now() - this.stTime).toFixed(0);
          this.stTime = null;
          this.dtTime = false;
          this.isDataChanged = false;
          msgEle.innerHTML = 'Load Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
          msgEle.classList.remove('e-hide');
        }
      }
    });
  }

  valueChange(args: any): void {
    if (this.listObj) {
      this.listObj.hidePopup();
      this.dropSlectedIndex = null;
      let index: number = this.listObj.value as number;
      clearTimeout(this.clrIntervalFun2);
      this.clrIntervalFun2 = setTimeout(() => {
        this.isDataChanged = true;
        this.stTime = null;
        let contentElement: Element = this.gridInstance.contentModule.getPanel().firstChild as Element;
        contentElement.scrollLeft = 0;
        contentElement.scrollTop = 0;
        this.gridInstance.pageSettings.currentPage = 1;
        this.stTime = performance.now();
        if (this.gridInstance.query.params.length > 1) {
          for (let i: number = 0; i < this.gridInstance.query.params.length; i++) {
            if (this.gridInstance.query.params[i].key === 'dataCount') {
              this.gridInstance.query.params[i].value = index.toString();
              break;
            }
          }
        }
        else {
          this.gridInstance.query.params[0].value = index.toString();
        }
        this.gridInstance.setProperties({ dataSource: this.data });
      }, 100);
    }
  }

  onDataBound(args: any): void {
    clearTimeout(this.clrIntervalFun);
    clearInterval(this.intervalFun);
    this.dtTime = true;
  }
}

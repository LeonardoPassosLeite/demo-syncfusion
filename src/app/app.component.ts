import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { Agentes, agentesMock } from './temp.mock';

const SERVICE_URI: string = 'https://services.syncfusion.com/angular/production/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Agentes[];
  public query: Query;
  public filterSettings: Object = {};;
  public selectionSettings: Object = {};
  @ViewChild('overviewgrid')
  public gridInstance: GridComponent;

  constructor() {
    this.data = agentesMock;
    this.query = new Query();
    this.gridInstance = {} as GridComponent;
  }

  public ngOnInit(): void {
    this.query = new Query().addParams('dataCount', '1000');
    this.filterSettings = { type: "Menu" };
    this.selectionSettings = { persistSelection: true, type: "Multiple", checkboxOnly: true };
  }

  dataBound() {
    this.gridInstance.autoFitColumns();
    this.gridInstance.autoFitColumns(['status']);
  }

  public customization(args: QueryCellInfoEventArgs) {
    if (args.column && args.data && args.cell && args.column.field === 'status') {
      const status = (args.data as any)['status'];
      if (status === 'Elaboração') {
        args.cell.classList.add('elaboracao');
      } else if (status === 'Aprovação') {
        args.cell.classList.add('aprovacao');
      } else if (status === 'Agendada') {
        args.cell.classList.add('agendada');
      }
    }
  }
}
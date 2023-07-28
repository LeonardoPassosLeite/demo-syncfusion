import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ColumnModel, EditService, EditSettingsModel, FilterService, GridComponent, QueryCellInfoEventArgs, SortService, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';

import { Agentes, agentesMock } from './temp.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilterService, EditService, SortService]
})
export class AppComponent implements OnInit {
  @ViewChild('overviewgrid') public gridInstance!: GridComponent;
  @Input() items!: any[];
  data: Agentes[];
  originalData: Agentes[];
  public filterSettings: Object = {};
  public toolbarItems!: ToolbarItems[];
  public editOptions!: EditSettingsModel;
  public toolbarOptions?: ToolbarItems[];
  public itens!: string[];
  public originalItens!: string[];
  public datePicker!: DatePicker;
  public inicioDate: Date = new Date(); 
  public terminoDate: Date = new Date();
  selectedRow: any = null;

  public editMode: boolean = false;
  public updateColor: string = '#ccc';
  public cancelColor: string = '#ccc';

  public editParams = { params: { format: 'dd/MM/yyyy' } };

  public dataSourceStatus: string[] = ['Elaboração', 'Aprovação', 'Agendada'];
  public dataSourcePeriodo: string[] = ['2022', '2023', '2024'];
  public dataSourceConcessao: string[] = ['Janaúba', 'Janaúba', 'Miracema'];

  itemStatus = {
    placeholder: 'Filtrar por Status',
    listData: [
      { value: 'Elaboração', text: 'Elaboração' },
      { value: 'Aprovação', text: 'Aprovação' },
      { value: 'Agendada', text: 'Agendada' },
    ],
  };

  itemPeriodo = {
    placeholder: 'Filtrar por Período',
    listData: [
      { value: '2021', text: '2021' },
      { value: '2022', text: '2022' },
      { value: '2023', text: '2023' },
    ],
  };

  itemConcessao = {
    placeholder: 'Filtrar por Concessão',
    listData: [
      { value: 'Janaúba', text: 'Janaúba' },
      { value: 'Miracema', text: 'Miracema' },
      { value: 'Ivaí', text: 'Ivaí' },
    ],
  };

  constructor() {
    this.data = agentesMock;
    this.originalData = [...this.data];
  }

  public ngOnInit(): void {
    this.originalItens = ['item1', 'item2', 'item3'];
    this.filterSettings = {
      type: 'Menu',
    }
    this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' }
    this.toolbarOptions = ['Search'];
  }

  public actionComplete(args: any) {
    if (args.requestType === 'save') {
      const index = this.data.findIndex(item => item.id === args.data.id);
      if (index !== -1) {
        this.data[index] = { ...args.data };
      }
    }
  }

  handleEdit() {
    this.gridInstance.startEdit();
    if (this.selectedRow) {
      this.editMode = true;
      this.updateColor = '#000';
      this.cancelColor = '#000';
    }
  }

  handleDelete() {
    this.gridInstance.deleteRecord();
  }

  handleUpdate() {
    this.gridInstance.endEdit();
    this.editMode = false;
    this.updateColor = '#ccc';
    this.cancelColor = '#ccc';
  }

  handleCancel() {
    this.gridInstance.closeEdit();
    this.editMode = false;
    this.updateColor = '#ccc';
    this.cancelColor = '#ccc';
  }

  rowSelected(args: any) {
    this.selectedRow = args.data;
  }

  appliedFilters = {
    status: '',
    concessao: '',
    inicio: '',
  };

  filterItems(event: any) {
    let searchString = event.target.value.toLowerCase();
    console.log("Searching for: ", searchString);
    this.data = this.originalData.filter(item => {
      const matches = Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchString)
      );
      console.log("Item: ", item, "Matches: ", matches);
      return matches;
    });
  }

  filterByStatus($event: any): void {
    this.appliedFilters.status = $event.target.value;
    this.applyFilters();
  }

  filterByConcessao($event: any): void {
    this.appliedFilters.concessao = $event.target.value;
    this.applyFilters();
  }

  filterByPeriodo($event: any): void {
    this.appliedFilters.inicio = $event.target.value;
    setTimeout(() => this.applyFilters());
  }

  applyFilters(): void {
    this.data = [...this.originalData];

    if (this.appliedFilters.status) {
      this.data = this.data.filter(item => item.status === this.appliedFilters.status);
    }

    if (this.appliedFilters.concessao) {
      this.data = this.data.filter(item => item.concessao === this.appliedFilters.concessao);
    }
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
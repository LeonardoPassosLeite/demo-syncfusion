import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { EditService, EditSettingsModel, FilterService, GridComponent, QueryCellInfoEventArgs, SortService, ToolbarItems, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Agentes, agentesMock } from './temp.mock';
import '../assets/translation';

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
  public filterSettings!: FilterSettingsModel;
  public toolbarItems!: ToolbarItems[];
  public editOptions!: EditSettingsModel;
  public toolbarOptions?: ToolbarItems[];
  public itens!: string[];
  public originalItens!: string[];
  selectedRow: any = null;

  public editMode: boolean = false;
  public updateColor: string = '#ccc';
  public cancelColor: string = '#ccc';

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

  constructor(private cdr: ChangeDetectorRef) {
    this.data = agentesMock;
    this.originalData = [...this.data];
  }

  public actionComplete(args: any) {
    if (args.requestType === 'save') {
      // Aqui, args.data contém os dados da linha que foram editados.
      // Você pode usar isso para atualizar seu modelo de dados.
      const index = this.data.findIndex(item => item.id === args.data.id);
      if (index !== -1) {
        // Certifique-se de fazer uma cópia do objeto antes de modificar para evitar a mutação do estado.
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

    if (this.appliedFilters.inicio) {
      const filterYear = new Date(parseInt(this.appliedFilters.inicio), 0);
      this.data = this.data.filter(item => {
        const itemYear = new Date(parseInt(item.inicio.split('/')[2]), 0);
        return itemYear >= filterYear;
      });
    }
    // Trigger the change detection to check for any changes in the component
    this.cdr.detectChanges();
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

  public settings(){
    this.originalItens = ['item1', 'item2', 'item3'];
    this.filterSettings = {
      type: 'Menu',
      operators: {
        stringOperator: [
          { value: 'startsWith', text: 'Começa com' },
          { value: 'endsWith', text: 'Termina com' },
          { value: 'contains', text: 'Contém' },
          { value: 'equal', text: 'Igual' },
          { value: 'notEqual', text: 'Não igual' }
        ],
        numberOperator: [
          { value: 'equal', text: 'Igual' },
          { value: 'greaterThan', text: 'Maior que' },
          { value: 'greaterThanOrEqual', text: 'Maior ou igual a' },
          { value: 'lessThan', text: 'Menor que' },
          { value: 'lessThanOrEqual', text: 'Menor ou igual a' },
          { value: 'notEqual', text: 'Não igual' }
        ],
        dateOperator: [
          { value: 'equal', text: 'Igual' },
          { value: 'greaterThan', text: 'Maior que' },
          { value: 'greaterThanOrEqual', text: 'Maior ou igual a' },
          { value: 'lessThan', text: 'Menor que' },
          { value: 'lessThanOrEqual', text: 'Menor ou igual a' },
          { value: 'notEqual', text: 'Não igual' },
        ],
      }
    }
    this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' }
    this.toolbarOptions = ['Search'];
  }

  public ngOnInit(): void {
    this.settings();
  }
}

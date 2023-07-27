import { Component, OnInit } from '@angular/core';
import {
  FilterService,
  EditService,
  SortService,
  ToolbarService,
  ToolbarItems,
  EditSettingsModel,
  QueryCellInfoEventArgs
} from '@syncfusion/ej2-angular-grids';
import '../assets/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilterService, EditService, SortService, ToolbarService]
})

export class AppComponent implements OnInit{
  title = 'demo-components-syncfusion';

  public data: Object[] = [
    {
      Status: 'Elaboração',
      Documento: 'AI-TAESA-659-845',
      Rev: 1,
      "Documento Vinculado": 'NPC 26943',
      "Agentes Vinculados": 'Eletrosul COT',
      Responsável: 'João Guilherme',
      Concessão: 'Janaúba',
      GM: 'ATE',
      Subestação: 'Aymorés',
      Início: new Date(8364186e5),
      Termino: new Date(8364186e5),
      Resumo: 'Obra em execução',
      Comentarios: 1
    },
    {
      Status: 'Aprovação',
      Documento: 'AI-TAESA-659-845',
      Rev: 1,
      "Documento Vinculado": 'NPC 26943',
      "Agentes Vinculados": 'Eletrosul COT',
      Responsável: 'João Guilherme',
      Concessão: 'Janaúba',
      GM: 'ATE',
      Subestação: 'Aymorés',
      Início: new Date(8364186e5),
      Termino: new Date(8364186e5),
      Resumo: 'Obra em execução',
      Comentarios: 1
    },
    {
      Status: 'Agendada',
      Documento: 'AI-TAESA-659-845',
      Rev: 1,
      "Documento Vinculado": 'NPC 26943',
      "Agentes Vinculados": 'Eletrosul COT',
      Responsável: 'João Guilherme',
      Concessão: 'Janaúba',
      GM: 'ATE',
      Subestação: 'Aymorés',
      Início: new Date(8364186e5),
      Termino: new Date(8364186e5),
      Resumo: 'Obra em execução',
      Comentarios: 1
    }
  ];

  public pageSettings!: Object;
  public filterSettings!: Object;
  public toolbarItems!: ToolbarItems[];
  public editOptions!: EditSettingsModel;
  public orderidrules!: Object;

  public customization(args: QueryCellInfoEventArgs) {
    if (args.column && args.data && args.cell && args.column.field === 'Status') {
      const status = (args.data as any)['Status'];
      console.log(status)
      console.log(args.cell)

      if (status === 'Elaboração') {
        args.cell.classList.add('elaboracao');
      } else if (status === 'Aprovação') {
        args.cell.classList.add('aprovacao');
      } else if (status === 'Agendada') {
        args.cell.classList.add('agendada');
      }
    }
  }

  ngOnInit(): void {
    this.pageSettings = { pageCount: 5 };
        this.filterSettings = {
          type: 'Menu'
        };
        this.toolbarItems = [
          'Edit',
          'Delete',
          'Update',
          'Cancel'
        ];
        this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.orderidrules = { required: true };
  }

}

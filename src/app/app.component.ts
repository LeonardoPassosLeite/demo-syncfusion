import { Component, OnInit } from '@angular/core';
import { FilterService, EditService, SortService, ToolbarService, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

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
      Comentários: 1
    },
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
      Comentários: 1
    },
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
      Comentários: 1
    }
  ];
  public pageSettings!: Object;
  public filterSettings!: Object;
  public toolbarItems!: ToolbarItems[];
  public editOptions!: EditSettingsModel;
  public orderidrules!: Object;

  ngOnInit(): void {
    this.pageSettings = { pageCount: 5 };
        this.filterSettings = { type: 'Menu' };
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

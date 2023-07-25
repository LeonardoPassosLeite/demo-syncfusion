import { Component, OnInit } from '@angular/core';
import {
  FilterService, GridComponent, EditService, SortService, ToolbarService,
  ToolbarItems, EditSettingsModel, ForeignKeyService
} from '@syncfusion/ej2-angular-grids';

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
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
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
        this.toolbarItems = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.orderidrules = { required: true };
  }

}

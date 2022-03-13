import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnDef} from "../../shared/column-def.interface";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  // декоратор @Input позволяет передать значение извне
  // передача идет через связывание свойств (property binding)
  // пример: [data]="outsideData"
  @Input() data: Array<any>
  @Input() tableModel: Array<ColumnDef>
  @Input() displayedColumns: Array<string>
  // получаем ссылку на объект компонента из шаблона
  @ViewChild(MatTable) matTable: MatTable<any>;

  constructor() { }

  renderRows() {
    // перерисовываем таблицу
    this.matTable.renderRows()
  }

}

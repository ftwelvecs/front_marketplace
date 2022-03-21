import {Component, ViewChild} from "@angular/core";
import {Product} from "../../shared/product.interface";
import {ColumnDef} from "../../shared/column-def.interface";
import {TableComponent} from "../table/table.component";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productName: string
  description: string
  quantity: number
  price: number
  weight: number
  // получаем ссылку на объект компонента из шаблона
  @ViewChild(TableComponent) tableComponent: TableComponent

  products: Array<Product> = []

  // описываем какие колонки будут в таблице
  productTableModel: Array<ColumnDef> = [
    {
      columnDef: 'name',
      columnLabel: 'Наименование'
    },
    {
      columnDef: 'description',
      columnLabel: 'Описание'
    },
    {
      columnDef: 'quantity',
      columnLabel: 'Кол-во'
    },
    {
      columnDef: 'price',
      columnLabel: 'Цена'
    },
    {
      columnDef: 'weight',
      columnLabel: 'Вес'
    }
  ]

  // массив для отображения колонок
  displayedColumns = ['name', 'description', 'quantity', 'price', 'weight']

  isLoaded: boolean

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((data: Product[]) => {
      // отложенное выполнение
      setTimeout(() => {
        this.isLoaded = true
        this.products = data
      }, 5000) // 5000 миллисекунд = 5 секундам
    });
  }

  add() {
    const product: Product = {
      name: this.productName,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      weight: this.weight
    }
    this.products.push(product)
    // перерисовываем таблицу
    this.tableComponent.renderRows()
  }

  delete(productName: any) {
    this.products = this.products.filter(p => p.name !== productName)
  }
}

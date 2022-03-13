import {Component, ElementRef, Input} from "@angular/core";
import {Category} from "../../shared/category.interface";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Array<Category> = [
    {name: 'Техника', description: 'Бытова техника'},
    {name: 'Химия', description: 'Химия'},
    {name: 'Мебель', description: 'Офисная мебель'},
    {name: 'Продукты', description: 'Продукты питания'}
  ]

  displayedColumns: string[] = ['name', 'description'];

  constructor() {
  }
}

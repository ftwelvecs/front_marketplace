import {Component} from "@angular/core";
import {Order} from "../../shared/order.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  editOrder: Order = {}

  orders: Array<Order> = [{
    id: 1,
    productName: 'Телефон',
    discount: 10
  },{
    id: 2,
    productName: 'Чехол',
    discount: 5
  }]

  add() {

  }

  delete(productName: string) {
    this.orders = this.orders.filter(order => order.productName != productName)
  }

  save() {
    // TODO: реализовать метод
  }

  getCopy(obj:any) {
    return Object.assign({}, obj)
  }
}

import {Component} from "@angular/core";
import {Order} from "../../shared/order.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: Array<Order> = [{
    productName: 'Телефон',
    discount: 10
  },{
    productName: 'Чехол',
    discount: 5
  }]

  add() {

  }

  delete(productName: string) {
    this.orders = this.orders.filter(order => order.productName != productName)
  }
}

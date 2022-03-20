import {Product} from "../shared/product.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("../../assets/products.json");
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //products:any = [];
  products:any = [{"name":"Albert"}]

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.getProducts();
  }

  getProducts() {
    console.log("product.component.ts.getProducts() meldet");
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      //console.log("The JSON: " + data);
      this.products = data;
      console.log("test");
      console.log("this.products ================= " + this.products.body);
    });
    //console.log("this.products = " + this.products[0].name);
    //this.products.name = "Jeremias";
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }
}

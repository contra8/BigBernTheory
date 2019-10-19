import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  index = new FormControl('');

  //products:any = [];
  products:any = [{"name":"Albert"}]

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts(1);
  }

  getProducts(index) {
    console.log("product.component.ts.getProducts() meldet");
    console.log(this.products);
    this.products = [];
    this.rest.getProducts(index).subscribe((data: {}) => {
      //console.log("The JSON: " + data);
      this.products = data;
      console.log("Test");
      console.log("this.products ================= " + this.products.body.p.text);
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
          this.getProducts(1);
        }, (err) => {
          console.log(err);
        }
      );
  }
}

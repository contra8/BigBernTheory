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

  array = [
    {
      guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
      age: 32,
      name: 'Powers Schneider',
    },
    {
      guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
      age: 25,
      name: 'Adrian Lawrence',
    },
    {
      guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
      age: 32,
      name: 'Boyer Stanley',
    },
  ]


  //products:any = [];
  products:any = [{"name":"Albert"}]

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.getProducts();
  }

  getProducts() {
    console.log("product.component.ts.getProducts() meldet");
    console.log(this.array);
    console.log(this.products);
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      //console.log("The JSON: " + data);
      this.products = data;
      console.log("test");
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
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }
}

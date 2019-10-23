import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //index = new FormControl('');
  pMenuVisible = false;
  products:any = []
  contentReceived = false;
  pIndexIsChosen = false;
  pIndex = null;
  textOfChosenParagraph = "Wert von textOfChosenParagraph";

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    //this.getTextFromServer(1);
  }

  onTextChange(value) {
    //console.log(value);
    console.log("onTextChange meldet: " + this.pIndex);
    this.pIndex = value;
    //console.log(this.pIndex);
    if (this.pIndex == 0)
    {
      console.log("pIndex ist 0: " + this.pIndex);
      this.pIndexIsChosen = false;
    }
    else {
      console.log("pIndex ist nicht 0: " + this.pIndex);
      this.pIndexIsChosen = true;
      this.textOfChosenParagraph = this.products.body.p[this.pIndex - 1].text;
    }
    console.log("pIndexIsChosen = " + this.pIndexIsChosen);
  }

  getTextFromServer(index) {
    this.pMenuVisible = this.pIndexIsChosen = false;
    this.contentReceived = true;
    this.pIndex = null;
    this.products = [];
    this.rest.getProducts(index).subscribe((data: {}) => {
      this.products = data;
      console.log("this.products ================= " + this.products.body.p[0].text);
      this.pMenuVisible = true;
      console.log(this.pMenuVisible);
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getTextFromServer(1);
        }, (err) => {
          console.log(err);
        }
      );
  }
}

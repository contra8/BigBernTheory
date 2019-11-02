import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  //index = new FormControl('');
  pMenuVisible = false;
  paragraphs:any = [];
  data:any = []
  contentReceived = false;
  showAllText = false;
  pIndexIsChosen = false;
  pIndex = null;
  textOfChosenParagraph = "Wert von textOfChosenParagraph";
  firstName = "Der Herausgeber";
  leText = "Initialer Text";

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    //this.getDocumentFromServer(1);
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
      this.textOfChosenParagraph = this.paragraphs.body.p[this.pIndex - 1].text;
    }
    console.log("pIndexIsChosen = " + this.pIndexIsChosen);
  }

  getDocumentFromServer(index) {
    console.log("getDocumentFromServer meldet");
    this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
    this.pIndex = null;
    this.data = [];
    this.rest.getDocument(index).subscribe((data: {}) => {
      this.data = data;
      this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
      console.log("getDocumentFromServer meldet 1: " + this.firstName);
      this.firstName = this.data.TEI.text.body.div.p[0]['xml:id'];
      console.log("getDocumentFromServer meldet 2: " + this.firstName);
      this.firstName = this.data.TEI.text.body.div.p[0]['#text'][3];
      console.log("getDocumentFromServer meldet 3: " + this.firstName);
      console.log("getDocumentFromServer meldet 4: Länge = " + this.data.TEI.text.body.div.p[0]['#text'].length);
      this.firstName = this.data.TEI.text.body.div.p[0]['app'][1].lem;
      console.log("getDocumentFromServer meldet 5: " + this.firstName);
      this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
      console.log("getDocumentFromServer meldet 6: " + this.firstName);
      //this.pMenuVisible = true;
      console.log(this.pMenuVisible);
      //this.contentReceived = true;
      this.createTheText();
    });
  }

  createTheText() {
    console.log("createTheText meldet; firstName = " + this.firstName);
    this.leText = "";
    /*for (var i=0; i < this.data.TEI.text.body.div.p[0]['#text'].length; i++) {
      this.leText = this.leText.concat(this.data.TEI.text.body.div.p[0]['app'][0].lem);
    }*/
    console.log(this.leText);
  }

  getDocumentParagraphsFromServer(index) {
    console.log("getDocumentParagraphsFromServer meldet");
    this.showAllText = this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
    this.pIndex = null;
    this.paragraphs = [];
    this.rest.getDocumentParagraphs(index).subscribe((data: {}) => {
      this.paragraphs = data;
      console.log("First paragraph: " + this.paragraphs.body.p[0].text);
      this.pMenuVisible = true;
      console.log(this.pMenuVisible);
      this.contentReceived = true;
    });
  }
}

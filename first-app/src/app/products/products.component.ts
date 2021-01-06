import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productNames : string[] = [ ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newProductName : string){
    this.productNames.push(newProductName);
  }

  onRemoveClick(productName : string){
    this.productNames = this.productNames.filter(pName => pName !== productName);
  }
}

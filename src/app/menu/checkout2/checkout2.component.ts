import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../item.model';
import { MenuComponent } from '../menu.component';


@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})


export class Checkout2Component implements OnInit {

  totalItemsPrice:number = 0;
  isShown:Boolean = false;


  @Input() checkoutItems: MenuItem[] = [] ; 

  constructor() {}

  ngOnInit(): void {}

  calculatePrice(itemPrice:number, quantity:number,index:number){     
  
    this.checkoutItems[index].total = itemPrice * quantity;
  }
  makeTotalPriceAppear(){
    this.isShown=true;
  }
  getTotalItemsPrice():number{
    let finalPrice = 0;
    this.checkoutItems.forEach(item1 =>{
      finalPrice += item1.total;
    });
    return finalPrice;
  }
}


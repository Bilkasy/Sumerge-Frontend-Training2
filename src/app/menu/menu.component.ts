import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {MenuItem} from './item.model';
// import {AddToCart} from '../addToCart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
 export class MenuComponent implements OnInit {

  items: MenuItem[] = [
    new MenuItem('Shish Tawook',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/shish.jpg',0,0),
    new MenuItem('Chicken Crunchy',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/crunchy.jpg',0,3),
    new MenuItem('Texas Fries',"plate of shish Tawook + rice + potatoes",30,'assets/imgs/texasfries.jpg',0,1),
    new MenuItem('Chicken Pasta',"plate of shish Tawook + rice + potatoes",60,'assets/imgs/chicken pasta.jpg',0,2),
    new MenuItem('Lamb chops',"plate of shish Tawook + rice + potatoes",150,'assets/imgs/lambchops.jpg',0,4),
    new MenuItem('Pizza Peproni',"plate of shish Tawook + rice + potatoes",85,'assets/imgs/pepronipizza.jpg',0,5),
    new MenuItem('Kofta',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/kofta.jpg',0,6),
    new MenuItem('Salad',"plate of shish Tawook + rice + potatoes",25,'assets/imgs/salad.jpg',0,9),
    new MenuItem('Chicken Briani',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/chickenbriani.jpg',0,10),
  ];

  passedItems:MenuItem[]=[];
  isDataFound:Boolean = false;
  flag = 0;


  constructor() {}  

  ngOnInit(): void {}



  addToCart(item:MenuItem,id:number){
    // let flag = 0;
    this.isDataFound = true;
    this.flag = 0;
    this.passedItems.forEach(items =>{
      if(id===items.id)
      {
         this.flag = 1;
      }
    });
    if(this.flag === 0)
    {
      this.passedItems.push(item);
    }
  }
}

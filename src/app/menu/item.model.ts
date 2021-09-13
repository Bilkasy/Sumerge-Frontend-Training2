import { Output } from '@angular/core';


 export class MenuItem{
     name:String;
     description:String;
     price:Number;
     image?:String;
     total:number;
     id: number;

    constructor(name:String,desc:String,price:number,image:String,total:number,id:number)
    {
        this.name=name;
        this.description=desc;
        this.price=price;
        this.image=image;
        this.total = total;
        this.id = id;
    }


}
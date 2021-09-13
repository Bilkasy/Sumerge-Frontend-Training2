import { Component } from '@angular/core';
import { MenuItem } from './menu/item.model';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodProject2';
  selectedItems: MenuItem[] = [];
  

}

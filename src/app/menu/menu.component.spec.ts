import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import {fakeAsync} from ''
import { MenuItem } from './item.model';
import { MenuComponent } from './menu.component';
import { from } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let debugElement: DebugElement;
  let menuComponentSpy: MenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports:[FormsModule,ReactiveFormsModule,RouterModule.forRoot([])],
      providers: [MenuComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      menuComponentSpy = TestBed.get(MenuComponent);
      // spyOn(component, 'addToCart').and.callThrough;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // To make sue that the elements of the passed items array are added successfully
  it('should display total price',() => {
    
      var menuItem = new MenuItem('Chicken Briani',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/chickenbriani.jpg',0,10);
      var menuItem2 = new MenuItem('Pizza Peproni',"plate of shish Tawook + rice + potatoes",85,'assets/imgs/pepronipizza.jpg',0,5);
      var menuItem3 = new MenuItem('Pizza Peproni',"plate of shish Tawook + rice + potatoes",85,'assets/imgs/pepronipizza.jpg',0,6);

      var  passesItemsList = component.passedItems;

      // difference: call fake only calls the function but does not do its implementation????
      // spyOn(component, 'addToCart').and.callFake((params)=>params);
      spyOn(component, 'addToCart').and.callThrough();

      component.addToCart(menuItem,10);
      component.addToCart(menuItem2,5);
      component.addToCart(menuItem3,6);

      expect(component.addToCart).toHaveBeenCalledTimes(3);
      expect(passesItemsList.length).toEqual(3);
      expect(passesItemsList).toEqual([new MenuItem('Chicken Briani',"plate of shish Tawook + rice + potatoes",90,'assets/imgs/chickenbriani.jpg',0,10),
      new MenuItem('Pizza Peproni',"plate of shish Tawook + rice + potatoes",85,'assets/imgs/pepronipizza.jpg',0,5),
      new MenuItem('Pizza Peproni',"plate of shish Tawook + rice + potatoes",85,'assets/imgs/pepronipizza.jpg',0,6),
    ]);
  });
  // To spy on a button Click
  it('should', fakeAsync(() => {
    spyOn(component, 'addToCart');
  
    let button = fixture.debugElement.nativeElement.querySelector('#addToCartBtn');
    button.click();
    expect(component.addToCart).toHaveBeenCalled();
  
  }));
});

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../item.model';
import { Checkout2Component } from './checkout2.component';

describe('Checkout2Component', () => {
  let component: Checkout2Component;
  let fixture: ComponentFixture<Checkout2Component>;
  let debugElement: DebugElement;
  let checkout2Service: Checkout2Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Checkout2Component ],
      imports:[FormsModule,ReactiveFormsModule,RouterModule.forRoot([])],
      providers: [Checkout2Component],
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(Checkout2Component);
    component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      checkout2Service = TestBed.get(Checkout2Component);
      spyOn(component, 'getTotalItemsPrice').and.returnValue(100);
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // To test the return of a function equals a given value you gave above in this testing file

  it('should display total price',() => {
    const compiled = debugElement.nativeElement;

    let x = component.getTotalItemsPrice();
    
    expect(component.getTotalItemsPrice).toHaveBeenCalled();

    expect(x).toEqual(100);
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregisComponent } from './addregis.component';

describe('AddregisComponent', () => {
  let component: AddregisComponent;
  let fixture: ComponentFixture<AddregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

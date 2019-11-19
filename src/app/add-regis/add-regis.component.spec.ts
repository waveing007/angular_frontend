import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisComponent } from './add-regis.component';

describe('AddRegisComponent', () => {
  let component: AddRegisComponent;
  let fixture: ComponentFixture<AddRegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegisComponent } from './editregis.component';

describe('EditComponent', () => {
  let component: EditRegisComponent;
  let fixture: ComponentFixture<EditRegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRegisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnrolamientoComponent } from './manage-enrolamiento.component';

describe('ManageEnrolamientoComponent', () => {
  let component: ManageEnrolamientoComponent;
  let fixture: ComponentFixture<ManageEnrolamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEnrolamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEnrolamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

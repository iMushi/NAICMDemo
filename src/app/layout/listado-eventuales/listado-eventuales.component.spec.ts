import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEventualesComponent } from './listado-eventuales.component';

describe('ListadoEventualesComponent', () => {
  let component: ListadoEventualesComponent;
  let fixture: ComponentFixture<ListadoEventualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEventualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEventualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

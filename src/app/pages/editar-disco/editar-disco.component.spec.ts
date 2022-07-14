import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDiscoComponent } from './editar-disco.component';

describe('EditarDiscoComponent', () => {
  let component: EditarDiscoComponent;
  let fixture: ComponentFixture<EditarDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

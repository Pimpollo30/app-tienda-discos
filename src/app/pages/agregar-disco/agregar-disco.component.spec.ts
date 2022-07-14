import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDiscoComponent } from './agregar-disco.component';

describe('AgregarDiscoComponent', () => {
  let component: AgregarDiscoComponent;
  let fixture: ComponentFixture<AgregarDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

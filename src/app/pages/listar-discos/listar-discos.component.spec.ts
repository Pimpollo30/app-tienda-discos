import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiscosComponent } from './listar-discos.component';

describe('ListarDiscosComponent', () => {
  let component: ListarDiscosComponent;
  let fixture: ComponentFixture<ListarDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

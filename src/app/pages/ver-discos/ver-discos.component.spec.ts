import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDiscosComponent } from './ver-discos.component';

describe('VerDiscosComponent', () => {
  let component: VerDiscosComponent;
  let fixture: ComponentFixture<VerDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

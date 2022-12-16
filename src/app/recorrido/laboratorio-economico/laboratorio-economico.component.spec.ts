import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioEconomicoComponent } from './laboratorio-economico.component';

describe('LaboratorioEconomicoComponent', () => {
  let component: LaboratorioEconomicoComponent;
  let fixture: ComponentFixture<LaboratorioEconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratorioEconomicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

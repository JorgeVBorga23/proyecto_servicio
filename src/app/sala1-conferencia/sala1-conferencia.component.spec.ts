import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala1ConferenciaComponent } from './sala1-conferencia.component';

describe('Sala1ConferenciaComponent', () => {
  let component: Sala1ConferenciaComponent;
  let fixture: ComponentFixture<Sala1ConferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sala1ConferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sala1ConferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

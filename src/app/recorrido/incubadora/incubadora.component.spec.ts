import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubadoraComponent } from './incubadora.component';

describe('IncubadoraComponent', () => {
  let component: IncubadoraComponent;
  let fixture: ComponentFixture<IncubadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

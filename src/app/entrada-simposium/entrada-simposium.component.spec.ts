import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaSimposiumComponent } from './entrada-simposium.component';

describe('EntradaSimposiumComponent', () => {
  let component: EntradaSimposiumComponent;
  let fixture: ComponentFixture<EntradaSimposiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaSimposiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaSimposiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

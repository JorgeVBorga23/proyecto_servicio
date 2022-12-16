import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimposiumComponent } from './simposium.component';

describe('SimposiumComponent', () => {
  let component: SimposiumComponent;
  let fixture: ComponentFixture<SimposiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimposiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimposiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

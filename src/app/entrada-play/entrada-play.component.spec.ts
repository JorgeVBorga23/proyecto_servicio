import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaPlayComponent } from './entrada-play.component';

describe('EntradaPlayComponent', () => {
  let component: EntradaPlayComponent;
  let fixture: ComponentFixture<EntradaPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

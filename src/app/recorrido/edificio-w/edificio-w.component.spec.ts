import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioWComponent } from './edificio-w.component';

describe('EdificioWComponent', () => {
  let component: EdificioWComponent;
  let fixture: ComponentFixture<EdificioWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdificioWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdificioWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

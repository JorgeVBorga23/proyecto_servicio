import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioVComponent } from './edificio-v.component';

describe('EdificioVComponent', () => {
  let component: EdificioVComponent;
  let fixture: ComponentFixture<EdificioVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdificioVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdificioVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

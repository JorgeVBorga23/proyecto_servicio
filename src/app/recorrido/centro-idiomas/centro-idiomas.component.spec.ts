import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroIdiomasComponent } from './centro-idiomas.component';

describe('CentroIdiomasComponent', () => {
  let component: CentroIdiomasComponent;
  let fixture: ComponentFixture<CentroIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroIdiomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

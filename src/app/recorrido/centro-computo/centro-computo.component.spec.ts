import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroComputoComponent } from './centro-computo.component';

describe('CentroComputoComponent', () => {
  let component: CentroComputoComponent;
  let fixture: ComponentFixture<CentroComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroComputoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

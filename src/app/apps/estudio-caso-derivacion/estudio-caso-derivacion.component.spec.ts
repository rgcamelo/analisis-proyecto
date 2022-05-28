import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCasoDerivacionComponent } from './estudio-caso-derivacion.component';

describe('EstudioCasoDerivacionComponent', () => {
  let component: EstudioCasoDerivacionComponent;
  let fixture: ComponentFixture<EstudioCasoDerivacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCasoDerivacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioCasoDerivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

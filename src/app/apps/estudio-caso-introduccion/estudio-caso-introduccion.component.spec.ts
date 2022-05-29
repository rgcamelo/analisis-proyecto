import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCasoIntroduccionComponent } from './estudio-caso-introduccion.component';

describe('EstudioCasoIntroduccionComponent', () => {
  let component: EstudioCasoIntroduccionComponent;
  let fixture: ComponentFixture<EstudioCasoIntroduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCasoIntroduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioCasoIntroduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionIntroduccionComponent } from './solucion-introduccion.component';

describe('SolucionIntroduccionComponent', () => {
  let component: SolucionIntroduccionComponent;
  let fixture: ComponentFixture<SolucionIntroduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolucionIntroduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionIntroduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

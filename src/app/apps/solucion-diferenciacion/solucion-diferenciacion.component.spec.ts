import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionDiferenciacionComponent } from './solucion-diferenciacion.component';

describe('SolucionDiferenciacionComponent', () => {
  let component: SolucionDiferenciacionComponent;
  let fixture: ComponentFixture<SolucionDiferenciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolucionDiferenciacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionDiferenciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

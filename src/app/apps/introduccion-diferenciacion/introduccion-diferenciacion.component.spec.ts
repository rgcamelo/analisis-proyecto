import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionDiferenciacionComponent } from './introduccion-diferenciacion.component';

describe('IntroduccionDiferenciacionComponent', () => {
  let component: IntroduccionDiferenciacionComponent;
  let fixture: ComponentFixture<IntroduccionDiferenciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionDiferenciacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionDiferenciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionIntegracionComponent } from './introduccion-integracion.component';

describe('IntroduccionIntegracionComponent', () => {
  let component: IntroduccionIntegracionComponent;
  let fixture: ComponentFixture<IntroduccionIntegracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionIntegracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

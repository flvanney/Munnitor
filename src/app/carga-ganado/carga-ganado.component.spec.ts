import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaGanadoComponent } from './carga-ganado.component';

describe('CargaGanadoComponent', () => {
  let component: CargaGanadoComponent;
  let fixture: ComponentFixture<CargaGanadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaGanadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaGanadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

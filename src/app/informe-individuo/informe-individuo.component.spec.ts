import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeIndividuoComponent } from './informe-individuo.component';

describe('InformeIndividuoComponent', () => {
  let component: InformeIndividuoComponent;
  let fixture: ComponentFixture<InformeIndividuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeIndividuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

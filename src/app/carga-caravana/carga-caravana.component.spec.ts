import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaCaravanaComponent } from './carga-caravana.component';

describe('CargaCaravanaComponent', () => {
  let component: CargaCaravanaComponent;
  let fixture: ComponentFixture<CargaCaravanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaCaravanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaCaravanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

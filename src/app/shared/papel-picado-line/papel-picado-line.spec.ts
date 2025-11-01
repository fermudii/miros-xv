import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelPicadoLine } from './papel-picado-line';

describe('PapelPicadoLine', () => {
  let component: PapelPicadoLine;
  let fixture: ComponentFixture<PapelPicadoLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapelPicadoLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapelPicadoLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

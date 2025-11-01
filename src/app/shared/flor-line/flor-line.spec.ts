import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorLine } from './flor-line';

describe('FlorLine', () => {
  let component: FlorLine;
  let fixture: ComponentFixture<FlorLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlorLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

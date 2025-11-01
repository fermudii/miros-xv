import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCover } from './main-cover';

describe('MainCover', () => {
  let component: MainCover;
  let fixture: ComponentFixture<MainCover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

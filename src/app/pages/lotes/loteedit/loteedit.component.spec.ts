import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteeditComponent } from './loteedit.component';

describe('LoteeditComponent', () => {
  let component: LoteeditComponent;
  let fixture: ComponentFixture<LoteeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoteeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

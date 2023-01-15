import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotelistComponent } from './lotelist.component';

describe('LotelistComponent', () => {
  let component: LotelistComponent;
  let fixture: ComponentFixture<LotelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LotelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

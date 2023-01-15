import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteaddComponent } from './loteadd.component';

describe('LoteaddComponent', () => {
  let component: LoteaddComponent;
  let fixture: ComponentFixture<LoteaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoteaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

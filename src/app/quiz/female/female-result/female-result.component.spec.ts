import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleResultComponent } from './female-result.component';

describe('FemaleResultComponent', () => {
  let component: FemaleResultComponent;
  let fixture: ComponentFixture<FemaleResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

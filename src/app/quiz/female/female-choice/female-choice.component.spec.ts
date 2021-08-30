import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleChoiceComponent } from './female-choice.component';

describe('FemaleChoiceComponent', () => {
  let component: FemaleChoiceComponent;
  let fixture: ComponentFixture<FemaleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

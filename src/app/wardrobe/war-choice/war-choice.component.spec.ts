import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarChoiceComponent } from './war-choice.component';

describe('WarChoiceComponent', () => {
  let component: WarChoiceComponent;
  let fixture: ComponentFixture<WarChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonQuizComponent } from './common-quiz.component';

describe('CommonQuizComponent', () => {
  let component: CommonQuizComponent;
  let fixture: ComponentFixture<CommonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

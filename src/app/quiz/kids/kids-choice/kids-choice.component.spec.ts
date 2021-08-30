import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsChoiceComponent } from './kids-choice.component';

describe('KidsChoiceComponent', () => {
  let component: KidsChoiceComponent;
  let fixture: ComponentFixture<KidsChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

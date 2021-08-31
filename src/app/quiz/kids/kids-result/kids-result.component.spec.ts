import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsResultComponent } from './kids-result.component';

describe('KidsResultComponent', () => {
  let component: KidsResultComponent;
  let fixture: ComponentFixture<KidsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

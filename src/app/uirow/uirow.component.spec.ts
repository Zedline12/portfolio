import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UirowComponent } from './uirow.component';

describe('UirowComponent', () => {
  let component: UirowComponent;
  let fixture: ComponentFixture<UirowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UirowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UirowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

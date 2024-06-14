import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppersideComponent } from './upperside.component';

describe('UppersideComponent', () => {
  let component: UppersideComponent;
  let fixture: ComponentFixture<UppersideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UppersideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

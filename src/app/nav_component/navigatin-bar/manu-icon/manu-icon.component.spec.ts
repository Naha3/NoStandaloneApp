import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuIconComponent } from './manu-icon.component';

describe('ManuIconComponent', () => {
  let component: ManuIconComponent;
  let fixture: ComponentFixture<ManuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManuIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

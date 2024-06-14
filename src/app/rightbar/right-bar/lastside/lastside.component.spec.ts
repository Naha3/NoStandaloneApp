import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsideComponent } from './lastside.component';

describe('LastsideComponent', () => {
  let component: LastsideComponent;
  let fixture: ComponentFixture<LastsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

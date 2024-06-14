import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatinBarComponent } from './navigatin-bar.component';

describe('NavigatinBarComponent', () => {
  let component: NavigatinBarComponent;
  let fixture: ComponentFixture<NavigatinBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatinBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatinBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

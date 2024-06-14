import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelCreateComponent } from './chanel-create.component';

describe('ChanelCreateComponent', () => {
  let component: ChanelCreateComponent;
  let fixture: ComponentFixture<ChanelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChanelCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

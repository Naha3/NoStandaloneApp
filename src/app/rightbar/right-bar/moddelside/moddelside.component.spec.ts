import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdelsideComponent } from './moddelside.component';

describe('ModdelsideComponent', () => {
  let component: ModdelsideComponent;
  let fixture: ComponentFixture<ModdelsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModdelsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModdelsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

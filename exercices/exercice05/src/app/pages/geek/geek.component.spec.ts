import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekComponent } from './geek.component';

describe('GeekComponent', () => {
  let component: GeekComponent;
  let fixture: ComponentFixture<GeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

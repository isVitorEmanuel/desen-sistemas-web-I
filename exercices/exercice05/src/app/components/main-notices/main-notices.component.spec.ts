import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNoticesComponent } from './main-notices.component';

describe('MainNoticesComponent', () => {
  let component: MainNoticesComponent;
  let fixture: ComponentFixture<MainNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

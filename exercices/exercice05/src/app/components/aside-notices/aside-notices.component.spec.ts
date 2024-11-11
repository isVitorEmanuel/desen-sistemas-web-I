import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNoticesComponent } from './aside-notices.component';

describe('AsideNoticesComponent', () => {
  let component: AsideNoticesComponent;
  let fixture: ComponentFixture<AsideNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

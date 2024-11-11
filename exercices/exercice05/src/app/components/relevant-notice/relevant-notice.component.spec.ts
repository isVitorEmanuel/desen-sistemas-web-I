import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantNoticeComponent } from './relevant-notice.component';

describe('RelevantNoticeComponent', () => {
  let component: RelevantNoticeComponent;
  let fixture: ComponentFixture<RelevantNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevantNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevantNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

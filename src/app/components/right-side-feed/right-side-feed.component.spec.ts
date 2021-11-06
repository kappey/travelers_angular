import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideFeedComponent } from './right-side-feed.component';

describe('RightSideFeedComponent', () => {
  let component: RightSideFeedComponent;
  let fixture: ComponentFixture<RightSideFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

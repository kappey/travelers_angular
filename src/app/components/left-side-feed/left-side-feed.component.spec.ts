import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideFeedComponent } from './left-side-feed.component';

describe('LeftSideFeedComponent', () => {
  let component: LeftSideFeedComponent;
  let fixture: ComponentFixture<LeftSideFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

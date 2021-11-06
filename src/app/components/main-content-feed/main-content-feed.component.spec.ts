import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentFeedComponent } from './main-content-feed.component';

describe('MainContentFeedComponent', () => {
  let component: MainContentFeedComponent;
  let fixture: ComponentFixture<MainContentFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

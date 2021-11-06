import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentProfileComponent } from './main-content-profile.component';

describe('MainContentProfileComponent', () => {
  let component: MainContentProfileComponent;
  let fixture: ComponentFixture<MainContentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalleventComponent } from './viewallevent.component';

describe('ViewalleventComponent', () => {
  let component: ViewalleventComponent;
  let fixture: ComponentFixture<ViewalleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalleventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

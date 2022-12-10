import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledInspectionsComponent } from './scheduled-inspections.component';

describe('ScheduledInspectionsComponent', () => {
  let component: ScheduledInspectionsComponent;
  let fixture: ComponentFixture<ScheduledInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledInspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

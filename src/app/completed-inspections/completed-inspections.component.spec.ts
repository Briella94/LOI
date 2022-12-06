import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedInspectionsComponent } from './completed-inspections.component';

describe('CompletedInspectionsComponent', () => {
  let component: CompletedInspectionsComponent;
  let fixture: ComponentFixture<CompletedInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedInspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
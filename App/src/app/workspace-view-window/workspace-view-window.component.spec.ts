import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceViewWindowComponent } from './workspace-view-window.component';

describe('WorkspaceViewWindowComponent', () => {
  let component: WorkspaceViewWindowComponent;
  let fixture: ComponentFixture<WorkspaceViewWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceViewWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceViewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

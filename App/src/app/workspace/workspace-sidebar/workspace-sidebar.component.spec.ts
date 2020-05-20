import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSidebarComponent } from './workspace-sidebar.component';

describe('WorkspaceSidebarComponent', () => {
  let component: WorkspaceSidebarComponent;
  let fixture: ComponentFixture<WorkspaceSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

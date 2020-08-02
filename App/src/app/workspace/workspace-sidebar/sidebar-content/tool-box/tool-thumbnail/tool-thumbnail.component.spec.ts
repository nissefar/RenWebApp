import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolThumbnailComponent } from './tool-thumbnail.component';

describe('ToolThumbnailComponent', () => {
  let component: ToolThumbnailComponent;
  let fixture: ComponentFixture<ToolThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

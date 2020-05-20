import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserWindowComponent } from './create-user-window.component';

describe('CreateUserWindowComponent', () => {
  let component: CreateUserWindowComponent;
  let fixture: ComponentFixture<CreateUserWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

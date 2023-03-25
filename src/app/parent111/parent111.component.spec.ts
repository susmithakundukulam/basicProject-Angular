import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent111Component } from './parent111.component';

describe('Parent111Component', () => {
  let component: Parent111Component;
  let fixture: ComponentFixture<Parent111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent111Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

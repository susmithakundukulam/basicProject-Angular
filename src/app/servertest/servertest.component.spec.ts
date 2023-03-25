import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServertestComponent } from './servertest.component';

describe('ServertestComponent', () => {
  let component: ServertestComponent;
  let fixture: ComponentFixture<ServertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServertestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

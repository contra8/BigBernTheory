import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotthelfComponent } from './gotthelf.component';

describe('GotthelfComponent', () => {
  let component: GotthelfComponent;
  let fixture: ComponentFixture<GotthelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotthelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotthelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

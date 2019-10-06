import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubbingComponent } from './clubbing.component';

describe('ClubbingComponent', () => {
  let component: ClubbingComponent;
  let fixture: ComponentFixture<ClubbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetanavbarComponent } from './metanavbar.component';

describe('MetanavbarComponent', () => {
  let component: MetanavbarComponent;
  let fixture: ComponentFixture<MetanavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetanavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetanavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

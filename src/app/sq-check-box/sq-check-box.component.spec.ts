import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqCheckBoxComponent } from './sq-check-box.component';

describe('SqCheckBoxComponent', () => {
  let component: SqCheckBoxComponent;
  let fixture: ComponentFixture<SqCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

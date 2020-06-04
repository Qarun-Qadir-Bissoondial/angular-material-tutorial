import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRippleComponent } from './mat-ripple.component';

describe('MatRippleComponent', () => {
  let component: MatRippleComponent;
  let fixture: ComponentFixture<MatRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

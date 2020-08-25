import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProflComponent } from './profl.component';

describe('ProflComponent', () => {
  let component: ProflComponent;
  let fixture: ComponentFixture<ProflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

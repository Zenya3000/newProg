import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefavcanComponent } from './onefavcan.component';

describe('OnefavcanComponent', () => {
  let component: OnefavcanComponent;
  let fixture: ComponentFixture<OnefavcanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnefavcanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnefavcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

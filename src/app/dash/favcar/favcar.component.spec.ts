import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcarComponent } from './favcar.component';

describe('FavcarComponent', () => {
  let component: FavcarComponent;
  let fixture: ComponentFixture<FavcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

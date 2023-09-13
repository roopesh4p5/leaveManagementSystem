import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewempComponent } from './addnewemp.component';

describe('AddnewempComponent', () => {
  let component: AddnewempComponent;
  let fixture: ComponentFixture<AddnewempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewempComponent]
    });
    fixture = TestBed.createComponent(AddnewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

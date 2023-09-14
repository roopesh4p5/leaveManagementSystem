import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleaverecordsComponent } from './myleaverecords.component';

describe('MyleaverecordsComponent', () => {
  let component: MyleaverecordsComponent;
  let fixture: ComponentFixture<MyleaverecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyleaverecordsComponent]
    });
    fixture = TestBed.createComponent(MyleaverecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSuccessfulDialogComponent } from './un-successful-dialog.component';

describe('UnSuccessfulDialogComponent', () => {
  let component: UnSuccessfulDialogComponent;
  let fixture: ComponentFixture<UnSuccessfulDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnSuccessfulDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSuccessfulDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

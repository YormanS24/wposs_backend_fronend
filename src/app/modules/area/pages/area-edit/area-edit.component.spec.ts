import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEditComponent } from './area-edit.component';

describe('AreaEditComponent', () => {
  let component: AreaEditComponent;
  let fixture: ComponentFixture<AreaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEditComponent);
    component = fixture.componentInstance;6
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

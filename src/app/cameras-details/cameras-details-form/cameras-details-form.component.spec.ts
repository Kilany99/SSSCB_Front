import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasDetailsFormComponent } from './cameras-details-form.component';

describe('CamerasDetailsFormComponent', () => {
  let component: CamerasDetailsFormComponent;
  let fixture: ComponentFixture<CamerasDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamerasDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamerasDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

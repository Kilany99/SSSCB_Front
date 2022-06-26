import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasDetailsComponent } from './cameras-details.component';

describe('CamerasDetailsComponent', () => {
  let component: CamerasDetailsComponent;
  let fixture: ComponentFixture<CamerasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamerasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamerasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

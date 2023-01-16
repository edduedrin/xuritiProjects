import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RooomsComponent } from './roooms.component';

describe('RooomsComponent', () => {
  let component: RooomsComponent;
  let fixture: ComponentFixture<RooomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RooomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RooomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

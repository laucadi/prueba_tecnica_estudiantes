import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendDetailComponent } from './studend-detail.component';

describe('StudendDetailComponent', () => {
  let component: StudendDetailComponent;
  let fixture: ComponentFixture<StudendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudendDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

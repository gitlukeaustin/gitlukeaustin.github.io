import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailListComponent } from './project-detail-list.component';

describe('ProjectDetailListComponent', () => {
  let component: ProjectDetailListComponent;
  let fixture: ComponentFixture<ProjectDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

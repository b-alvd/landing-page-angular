import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInfosComponent } from './video-infos.component';

describe('VideoInfosComponent', () => {
  let component: VideoInfosComponent;
  let fixture: ComponentFixture<VideoInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

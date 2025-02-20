import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallpageComponent } from './apicallpage.component';

describe('ApicallpageComponent', () => {
  let component: ApicallpageComponent;
  let fixture: ComponentFixture<ApicallpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApicallpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApicallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

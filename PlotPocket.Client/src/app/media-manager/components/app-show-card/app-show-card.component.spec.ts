import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowCardComponent } from './app-show-card.component';

describe('AppShowCardComponent', () => {
  let component: AppShowCardComponent;
  let fixture: ComponentFixture<AppShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShowCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

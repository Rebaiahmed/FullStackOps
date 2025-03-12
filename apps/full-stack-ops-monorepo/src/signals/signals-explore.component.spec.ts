import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsExploreComponent } from './signals-explore.component';

describe('SignalsExploreComponent', () => {
  let component: SignalsExploreComponent;
  let fixture: ComponentFixture<SignalsExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsExploreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

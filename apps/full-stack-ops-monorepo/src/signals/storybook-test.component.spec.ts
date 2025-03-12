import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorybookTestComponent } from './storybook-test.component';

describe('StorybookTestComponent', () => {
  let component: StorybookTestComponent;
  let fixture: ComponentFixture<StorybookTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorybookTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StorybookTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

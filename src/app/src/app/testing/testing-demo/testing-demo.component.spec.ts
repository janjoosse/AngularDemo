import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TestingDemoComponent } from './testing-demo.component';

describe('TestingDemoComponent', () => {
  let component: TestingDemoComponent;
  let fixture: ComponentFixture<TestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call click handler', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();

    // expect
  }));
});

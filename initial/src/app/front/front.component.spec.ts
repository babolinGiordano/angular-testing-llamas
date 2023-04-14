import { TestBed } from '@angular/core/testing';
import { FrontComponent } from './front.component';
import { FrontService } from './front.service';

import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

describe('FrontComponent', () => {
  let componentUnderTest: FrontComponent, actualValue: any;
  let frontServiceSpy: Spy<FrontService>;

  Given(() => {
    // frontServiceSpy = {
    //   getFeaturedLlamas: jasmine.createSpy('getFeaturedLlamas')
    //     .and.returnValue([{name: 'shai', imageFileName: 'fakeImage'}])
    // };

    TestBed.configureTestingModule({
      providers: [
        FrontComponent,
        {
          provide: FrontService,
          useValue: createSpyFromClass(FrontService)
        }
      ]
    });

    componentUnderTest = TestBed.inject(FrontComponent);
    frontServiceSpy = TestBed.inject<any>(FrontService);
  });

  describe('INIT', () => {
    Given(() => {
      frontServiceSpy.getFeaturedLlamas.and.returnValue([
        { name: 'shai', imageFileName: 'fakeImage' }
      ]);
    });
    When(() => {
      componentUnderTest.ngOnInit();
    });
    Then(() => {
      expect(componentUnderTest.llamas.length).toBeGreaterThan(0);
      expect(frontServiceSpy.getFeaturedLlamas).toHaveBeenCalled();
    });
  });

  describe('METHOD: isListVisible', () => {
    When(() => {
      actualValue = componentUnderTest.isListVisible();
    });

    describe('GIVEN there are llamas THEN return true', () => {
      Given(() => {
        componentUnderTest.llamas = [{ name: 'Billy', imageFileName: 'fake.jpg' }];
      });
      Then(() => {
        expect(actualValue).toEqual(true);
      });
    });

    describe('GIVEN there are no llamas THEN return false', () => {
      Given(() => {
        componentUnderTest.llamas = [];
      });
      Then(() => {
        expect(actualValue).toEqual(false);
      });
    });
  });
});

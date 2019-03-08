import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'lib-test-library',
  template: `
    <p>
      test-library works!
    </p>
  `,
  styles: []
})
export class TestLibraryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public doSomething(): string {
    const aMoment: moment.Moment = moment();
    return aMoment.format();
  }

}

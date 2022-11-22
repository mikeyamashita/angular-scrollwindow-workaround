import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

/** @title Virtual scrolling window */
@Component({
  selector: 'cdk-virtual-scroll-window-scrolling-example',
  styleUrls: ['cdk-virtual-scroll-window-scrolling-example.css'],
  templateUrl: 'cdk-virtual-scroll-window-scrolling-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollWindowScrollingExample {
  @Input() shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  items = Array.from({length: 1000}).map((_, i) => `Item #${i}`);
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
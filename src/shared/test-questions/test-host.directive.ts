import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTestHost]'
})
export class TestHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

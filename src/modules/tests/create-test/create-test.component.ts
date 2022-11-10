import { Component, OnInit, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TestHostDirective } from 'src/shared/test-questions/test-host.directive';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styles: [
  ]
})
export class CreateTestComponent implements OnInit {

  model = [];

  fields: FormlyFieldConfig[] = [];

  @ViewChild(TestHostDirective, {static: true}) testBuilder!: TestHostDirective;

  constructor() { }

  ngOnInit(): void { }

  addQuestion() { }

  onSubmit() {
    console.log('model', this.model);
  }

}

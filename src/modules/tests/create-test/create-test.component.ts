import { Component, OnInit, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TestBuilderDirective } from 'src/shared/test-questions/test-builder.directive';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styles: [
  ]
})
export class CreateTestComponent implements OnInit {

  model = [];

  fields: FormlyFieldConfig[] = [];

  @ViewChild(TestBuilderDirective, {static: true}) testBuilder!: TestBuilderDirective;

  constructor() { }

  ngOnInit(): void { }

  addQuestion() { }

  onSubmit() {
    console.log('model', this.model);
  }

}

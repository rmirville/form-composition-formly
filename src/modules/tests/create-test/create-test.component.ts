import { Component, OnInit, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ShortAnswerQuestionComponent } from 'src/shared/test-questions/short-answer-question/short-answer-question.component';
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

  @ViewChild(TestHostDirective, {static: true}) testHost!: TestHostDirective;

  constructor() { }

  ngOnInit(): void {
    this.testHost.viewContainerRef.clear();

  }

  addQuestion() {
    this.testHost.viewContainerRef.createComponent<ShortAnswerQuestionComponent>(ShortAnswerQuestionComponent);
  }

  onSubmit() {
    console.log('model', this.model);
  }

}

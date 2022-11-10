import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'app-multiple-choice-question',
  template: `
    <p>
      multiple-choice-question works!
    </p>
  `,
  styles: [
  ]
})
export class MultipleChoiceQuestionComponent implements OnInit, QuestionComponent {
  data = {};

  constructor() { }

  ngOnInit(): void {
  }

}

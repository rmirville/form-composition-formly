import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'app-short-answer-question',
  template: `
    <p>
      short-answer-question works!
    </p>
  `,
  styles: [
  ]
})
export class ShortAnswerQuestionComponent implements OnInit, QuestionComponent {
  data = {};

  constructor() { }

  ngOnInit(): void {
  }

}

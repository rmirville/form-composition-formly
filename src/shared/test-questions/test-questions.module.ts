import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortAnswerQuestionComponent } from './short-answer-question/short-answer-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';



@NgModule({
  declarations: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
})
export class TestQuestionsModule { }

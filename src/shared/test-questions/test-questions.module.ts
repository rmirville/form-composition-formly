import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortAnswerQuestionComponent } from './short-answer-question/short-answer-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { QuestionDirective } from './question.directive';



@NgModule({
  declarations: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    QuestionDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    QuestionDirective,
  ],
})
export class TestQuestionsModule { }

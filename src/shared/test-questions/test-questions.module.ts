import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortAnswerQuestionComponent } from './short-answer-question/short-answer-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TestHostDirective } from './test-host.directive';



@NgModule({
  declarations: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    TestHostDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    TestHostDirective,
  ],
})
export class TestQuestionsModule { }

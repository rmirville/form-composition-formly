import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortAnswerQuestionComponent } from './short-answer-question/short-answer-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TestBuilderDirective } from './test-builder.directive';



@NgModule({
  declarations: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    TestBuilderDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
    TestBuilderDirective,
  ],
})
export class TestQuestionsModule { }

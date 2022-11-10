import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestQuestionsModule } from './test-questions/test-questions.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestQuestionsModule,
  ],
  exports: [
    TestQuestionsModule,
  ],
})
export class SharedModule { }

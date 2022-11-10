import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/shared/shared.module';
import { ShortAnswerQuestionComponent } from 'src/shared/test-questions/short-answer-question/short-answer-question.component';
import { MultipleChoiceQuestionComponent } from 'src/shared/test-questions/multiple-choice-question/multiple-choice-question.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTestComponent,
  },
  {
    path: 'edit',
    component: EditTestComponent,
  },
  {
    path: '',
    component: ViewTestsComponent,
  }
]

@NgModule({
  declarations: [
    CreateTestComponent,
    EditTestComponent,
    ViewTestsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FormlyModule.forChild(),
    SharedModule,
  ],
  entryComponents: [
    ShortAnswerQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
})
export class TestsModule { }

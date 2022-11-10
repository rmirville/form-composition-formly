import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styles: [
  ]
})
export class CreateTestComponent implements OnInit {

  model = {};

  fields: FormlyFieldConfig[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('model', this.model);
  }

}

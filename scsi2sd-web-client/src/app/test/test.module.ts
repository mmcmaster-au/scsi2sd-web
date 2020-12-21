import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class TestModule { }

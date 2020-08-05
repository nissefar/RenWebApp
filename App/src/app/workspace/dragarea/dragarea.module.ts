import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragareaComponent } from './dragarea/dragarea.component';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [DragareaComponent],
  imports: [
    CommonModule,
    DragDropModule 
  ]
})
export class DragareaModule { }

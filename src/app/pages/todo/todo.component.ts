import { Component, EventEmitter, Input, input, LOCALE_ID, Output, output } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule,  registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input({ required: true}) tododata!: NTodo.TodoData;

  @Input() first!: boolean;

  @Input() last!: boolean;

  @Input() odd!: boolean;

  @Input() even!: boolean;

  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();

  get priority(): string {
    switch (this.tododata.priority) {
      case NTodo.Priority.LOW:

      return NTodo.PriorityText.LOW;

      case NTodo.Priority.MEDIUM:

      return NTodo.PriorityText.MEDIUM;

      default:
        return NTodo.PriorityText.HIGH;
    }
    
  }

  get progress() {
    return this.tododata.progress * 100;
  } 

  get range() {
    if (this.progress >= 0 && this.progress <= NTodo.Range.LOW) {
      return NTodo.RangeText.LOW;
    } else if (this.progress > NTodo.Range.LOW && this.progress <= NTodo.Range.MEDIUM) {
      return NTodo.RangeText.MEDIUM;
    } else {
      return NTodo.RangeText.HIGH;
    }
  }

}

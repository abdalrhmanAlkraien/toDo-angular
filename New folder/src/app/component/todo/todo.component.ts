import { TodoServiceService } from './../../services/todo-service.service';


import { TodosComponent } from './../todos/todos.component';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from '../../Models/Todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todoshere:Todo;
  @Output() toggleEvent=new EventEmitter();
  @Output() deleteFunc=new EventEmitter();
  constructor() { }



  onChecked(todoshere:Todo){
    console.log(todoshere);
    this.toggleEvent.emit(todoshere);

  }
  onDelete(todoshere:Todo){

    this.deleteFunc.emit(todoshere);


  }

}

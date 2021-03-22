import { Todo } from './../../Models/Todo';

import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  id:number =5;
  title:string="ass";
  @Output() addEvent=new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  addTodo()
  {
    let todo=new Todo(
      this.id,
      this.title,
      false
    );

    console.log(todo);

    this.addEvent.emit(todo);
    this.title="";
    this.id++;
  }

}

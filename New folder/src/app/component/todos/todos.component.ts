import { TodoServiceService } from './../../services/todo-service.service';
import { AddtodoComponent } from './../addtodo/addtodo.component';
import { TodoComponent } from './../todo/todo.component';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor(private getServies:TodoServiceService) { }

  ngOnInit(): void {
    console.log(this.getServies.getdata(10));

    this.getServies.getdata(10).subscribe(
      item=>{
        this.todos=item
      }
    );
  }

  toggletodo(todo){
    this.todos=this.todos.map(
      x=>{
        if(x.id===todo.id){
          this.getServies.update(todo).subscribe(()=>{});
          x.completed=!x.completed;
        }

        return x;
      });

  }

  OnDelete(todo){
    this.getServies.deletedata(todo.id).subscribe(
      ()=>{

        this.todos=this.todos.filter(x=>{
          return x.id !== todo.id;

        });
      }
    );

  }

  AddTodo(todo)
  {
    this.getServies.add(todo).subscribe((newTodo:Todo)=>{
      console.log({newTodo,todo});

      this.todos.push(todo);
    });
  }

}

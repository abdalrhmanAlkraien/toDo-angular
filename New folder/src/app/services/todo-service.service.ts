import { Todo } from 'src/app/Models/Todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http:HttpClient ) { }

  getdata(limit:number):Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit='+limit);
  }

  deletedata(id:number){
    return this.http.delete<Todo[]>('https://jsonplaceholder.typicode.com/todos/'+id)
  }

  update(todo:Todo){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/'+todo.id, todo);
  }

  add(todo:Todo):Observable<Todo>
  {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos/',todo);
  }
}

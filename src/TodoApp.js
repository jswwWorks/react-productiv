import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {

  const [ todos, setTodos ] = useState(initialTodos);

  // function dumbfunk(){
  //   debugger;
  // }

 // debugger;
  /** add a new todo to list */
  function create(newTodo) {
  //  console.log("this is the newTodo", newTodo);
   // newTodo.id = uuid();

   //console.log("THIS IS INSIDE THE CREATE FUNCTION TODOS", todos)

    newTodo = {...newTodo, id:uuid() };
    console.log('newTodo now should have an id', newTodo);

    setTodos(currTodos=> [...currTodos, newTodo]);

    //debugger;

  }

  console.log('after rerendering, there should be the todo', todos);

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id ));
  }

  /** save todo status */
  function handleSave(formData){
    if (formData?.id){
      update(formData);
    }
    else{
      create(formData);
    }
  }

  // dumbfunk();

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList todos={todos} update={update} remove={remove} />
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">

            {(todos?.length > 0) &&
            // (if no top todo, omit this whole section)
              <section className="mb-4">
                <h3>Top Todo</h3>
                <TopTodo todos={todos} />
              </section>
            }

            <section>
              <h3 className="mb-3">Add Nü</h3>
              < TodoForm
                initialFormData={{
                  title: 'none',
                  description: 'none',
                  priority: 3
                }}
                handleSave={handleSave}
              />
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;
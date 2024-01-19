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

  /** add a new todo to list */
  function create(newTodo) {

    newTodo = {...newTodo, id:uuid() };
    setTodos(currTodos => [...currTodos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {

    // First, filters out the old version of that todo
    setTodos(currTodos => currTodos.filter(
      currTodo => currTodo.id !== updatedTodo.id
    ));

    // Replaces old version with updated information
    setTodos(currTodos => [...currTodos, updatedTodo]);

  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(currTodos => currTodos.filter(currTodo => currTodo.id !== id ));
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
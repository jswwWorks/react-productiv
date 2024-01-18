import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  //DO THIS WITH STATE
  let mode="display";

  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    mode = "edit";
  }

  /** Call remove fn passed to this. */
  function handleDelete() { }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { }


  return (
      <div className="EditableTodo">

                {mode === "edit" &&
                  <TodoForm />
                }

                {mode==="display" &&
                  <div className="mb-3">
                    <div className="float-end text-sm-end">
                      <button
                          className="EditableTodo-toggle btn-link btn btn-sm"
                          onClick={toggleEdit}>
                        Edit
                      </button>
                      <button
                          className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                          onClick={handleDelete}>
                        Del
                      </button>
                    </div>
                    <Todo
                      id={todo.id}
                      title={todo.title}
                      description={todo.description}
                      priority={todo.priority}
                    />
                  </div>
                }


      </div>
  );
}

export default EditableTodo;

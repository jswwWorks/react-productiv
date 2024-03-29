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
 * State
 * - isEditing (boolean)
 *    if true: renders edit form
 *    if false: renders normal todo list item
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(currVal => !currVal);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(updatedTodo) {
    update(updatedTodo);
    toggleEdit();
  }


  return (
      <div className="EditableTodo">

                {isEditing &&
                  < TodoForm
                  initialFormData={{
                    title: todo.title,
                    description: todo.description,
                    priority: todo.priority,
                    id: todo.id
                  }}
                  handleSave={handleSave}
                />
                }

                {!isEditing &&
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

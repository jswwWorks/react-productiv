import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority}) {

  return (
      <div className="Todo" id={id}>
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}.</small></div>
      </div>
  );
}

export default Todo;

// question for checkin: is it ok to have key warning because we're showing
// the same exact item twice

// or should we be assigning keys when we loop over and render all of the Todos?
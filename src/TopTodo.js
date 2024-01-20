import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {

  if (todos) {
    let top = todos.reduce( //const not let
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

    return <Todo
              id={top.id}
              title={top.title}
              description={top.description}
              priority={top.priority}
            />;
  }

}

export default TopTodo;
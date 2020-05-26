import React from "react";

const History = ({ tasks }) => {
  return (
    <div>
    <h3>History: </h3>
    <ul>
      {tasks
        .filter(task => task.history === true)
        .map(task => (
          <li key={task._id}>{task.name}</li>
        ))}
    </ul>
    </div>
  );
};

export default History;

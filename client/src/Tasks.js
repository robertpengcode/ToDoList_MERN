import React from "react";
import TaskCard from "./TaskCard";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginLeft: 0,
    marginTop: "1rem"
  },
  gridList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Tasks = ({ tasks, deleteTask, handleDone, handleUndo, handleSave }) => {
  const classes = useStyles();
  console.log(tasks);
  if (!tasks) {
    return <h1>loading</h1>;
  } else {
    return (
      <Container maxWidth="xl" className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Current</ListSubheader>
          </GridListTile>
          {tasks
            .filter(task => task.completed === false && task.history === false)
            .map(task => (
              <TaskCard
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                handleDone={handleDone}
              />
            ))}
        </GridList>

        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Completed</ListSubheader>
          </GridListTile>
          {tasks
            .filter(task => task.completed === true && task.history === false)
            .map(task => (
              <TaskCard
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                handleUndo={handleUndo}
                handleSave={handleSave}
              />
            ))}
        </GridList>
      </Container>
    );
  }
};

export default Tasks;

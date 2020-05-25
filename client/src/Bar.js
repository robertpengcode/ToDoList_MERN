import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles({
  titleStyle: {
    color: "white",
    margin: "1rem",
    flexGrow: 1
  },
  todayStyle: {
    color: "white",
    fontSize: 24
  }
});

const today = moment().format("MMMM Do YYYY");

function Bar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h4" className={classes.titleStyle}>
          My To-Do List
        </Typography>
        <Typography className={classes.todayStyle}>{today}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;

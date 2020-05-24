import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/core/MenuIcon";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import white from '@material-ui/core/colors/white';

const useStyles = makeStyles({
    titleStyle: {
        color: "white",
        margin: "1rem"
    }
});

function Bar() {
  const classes = useStyles();  

  return (
    <AppBar position="static" >
      <Toolbar>
        <IconButton
          edge="start"
          //className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h4" 
        className={classes.titleStyle}
        >
          My To-Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;

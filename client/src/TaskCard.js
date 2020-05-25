import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles({
  desStyle: {
    color: "black",
    fontSize: 18
  },
  root: {
    width: 250,
    background: "#fff59d",
    margin: "1rem",
    height: 250
  },
  content: {
    fontSize: 18,
    color: "blue"
  }
});

const TaskCard = ({ task, deleteTask, handleDone, handleUndo }) => {
  const classes = useStyles();
  const date = task.createDate;
  const due = task.dueDate;
  const createDate = moment(date).format("l");
  const dueDate = moment(due).format("l");
  const taskId = task._id;

  return (
    <Card className={classes.root}>
      <CardActions>
        {task.important ? <StarRateIcon color="secondary" /> : null}
        <IconButton onClick={() => deleteTask(taskId)}>
          <DeleteIcon />
        </IconButton>
        {!task.completed ? (
          <IconButton>
            <EditIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleUndo(taskId)}>
            <UndoIcon />
          </IconButton>
        )}
        {!task.completed ? (
          <IconButton onClick={() => handleDone(taskId)}>
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton>
            <SaveIcon />
          </IconButton>
        )}
      </CardActions>
      <CardHeader title={task.name} subheader={`Create On: ${createDate}`} />
      {task.dueDate ? (
        <CardContent>
          <Typography variant="body2" className={classes.content}>
            {`Due On: ${dueDate}`}
          </Typography>
        </CardContent>
      ) : null}
    </Card>
  );
};

export default TaskCard;

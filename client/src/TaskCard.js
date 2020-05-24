import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import ShareIcon from "@material-ui/icons/Share";
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
    //maxWidth: 250,
    width: 250,
    background: "#fff59d",
    margin: "1rem",
    //maxHeight: 250
    height: 250
  }
});

const TaskCard = ({ task }) => {
  const classes = useStyles();
  const date = task.createDate;
  const createDate = moment(date).format("l");

  return (
    <Card className={classes.root}>
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary"
         component="p" className={classes.desStyle}>
           {`Note: ${task.description}`}
        </Typography>
      </CardContent> */}
      {!task.completed ? (
        <CardActions>
          {task.important ? <StarRateIcon color="secondary" /> : null}
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DoneIcon />
          </IconButton>
        </CardActions>
      ) : (
        <CardActions>
          {task.important ? <StarRateIcon color="secondary" /> : null}
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <UndoIcon />
          </IconButton>
          <IconButton>
            <SaveIcon />
          </IconButton>
        </CardActions>
      )}
      <CardHeader title={task.name} subheader={`Create On: ${createDate}`} />
    </Card>
  );
};

export default TaskCard;

//const [expanded, setExpanded] = React.useState(false);
//aria-label="delete"
//aria-label="edit"
//aria-label="done"
//aria-label="save"
{
  /* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */
}

// action={
//   <IconButton aria-label="settings">
//     <MoreVertIcon />
//   </IconButton>
// }

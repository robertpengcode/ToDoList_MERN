import React from "react";
import TaskCard from "./TaskCard";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    //margin: "1rem",
    width: "100%",
    
  },
  gridList: {
    width: 900,
    display: "flex",
    flexWrap: "wrap",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Tasks = ({ tasks }) => {
  const classes = useStyles();
  console.log(tasks);
  if (!tasks) {
    return <h1>loading</h1>;
  } else {
    return (
      <Container maxWidth="lg" className={classes.root}>
        
          <GridList cellHeight={180} cols={3} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
              <ListSubheader component="div">Current</ListSubheader>
            </GridListTile>
            {tasks.filter(task => task.completed === false)
            .map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </GridList>
       
        <Divider variant="middle" />
        
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">Completed</ListSubheader>
            </GridListTile>
            {tasks.filter(task => task.completed === true)
            .map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </GridList>
        
      </Container>
    );
  }
};

export default Tasks;

// export default function TitlebarGridList() {

//     return (
//       <div className={classes.root}>
//         <GridList cellHeight={180} className={classes.gridList}>
//           <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//             <ListSubheader component="div">December</ListSubheader>
//           </GridListTile>
//
//               />
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>
//     );
//   }

//             <GridListTile key={tile.img}>
//               <img src={tile.img} alt={tile.title} />
//               <GridListTileBar
//                 title={tile.title}
//                 subtitle={<span>by: {tile.author}</span>}
//                 actionIcon={
//                   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//                     <InfoIcon />
//                   </IconButton>
//                 }

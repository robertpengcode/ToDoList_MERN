import React, { Fragment, Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Bar from "./Bar";
import Tasks from "./Tasks";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    const tasks = (await axios.get("/api/tasks")).data;
    this.setState({ tasks });
  }

  render() {
    const { tasks } = this.state;
    return (
      // <Fragment>
      //   <Bar />
      //   <Tasks tasks={tasks} />
      // </Fragment>

    <Grid container direction="column">
      <Grid item><Bar /></Grid>
      <Grid item container >
        <Grid item xs={12} sm={9}><Tasks tasks={tasks}/></Grid>
        <Grid item xs={12} sm={3}><Form /></Grid>
      </Grid>
    </Grid>

    );
  }
}

export default App;

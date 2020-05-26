import React, { Fragment, Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Bar from "./Bar";
import Tasks from "./Tasks";
import Form from "./Form";
import History from "./History";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  async componentDidMount() {
    const tasks = (await axios.get("/api/tasks")).data;
    this.setState({ tasks });
  }

  createTask(task) {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  async deleteTask(id) {
    try {
      await axios.delete(`/api/tasks/${id}`);
      this.setState({
        tasks: this.state.tasks.filter(_task => _task._id !== id)
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async handleDone(id) {
    try {
      const updatedTask = (await axios.put(`/api/tasks/${id}/done`)).data;
      console.log("update done", updatedTask);
      this.setState({
        tasks: [
          ...this.state.tasks.filter(_task => _task._id !== id),
          updatedTask
        ]
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async handleUndo(id) {
    try {
      const updatedTask = (await axios.put(`/api/tasks/${id}/undo`)).data;
      console.log("update undo", updatedTask);
      this.setState({
        tasks: [
          ...this.state.tasks.filter(_task => _task._id !== id),
          updatedTask
        ]
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async handleSave(id) {
    try {
      const updatedTask = (await axios.put(`/api/tasks/${id}/save`)).data;
      console.log("update save", updatedTask);
      this.setState({
        tasks: [
          ...this.state.tasks.filter(_task => _task._id !== id),
          updatedTask
        ]
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    const { tasks } = this.state;
    const { createTask, deleteTask, handleDone, handleUndo, handleSave } = this;
    return (
      <Fragment>
        <Grid container direction="column">
          <Grid item>
            <Bar />
          </Grid>
          <Grid item container>
            <Grid item xs={12} sm={9}>
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                handleDone={handleDone}
                handleUndo={handleUndo}
                handleSave={handleSave}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Form createTask={createTask} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <History tasks={tasks} />
        </Grid>
      </Fragment>
    );
  }
}

export default App;

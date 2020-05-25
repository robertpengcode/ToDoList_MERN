import React, { Component } from "react";
import axios from "axios";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      important: false,
      dueDate: new Date()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date
    });
  }

  handleCancel() {
    this.setState({
      name: "",
      important: false,
      dueDate: new Date()
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const task = {
      name: this.state.name,
      important: this.state.important,
      dueDate: this.state.dueDate
    };
    try {
      const newTask = (await axios.post("/api/tasks", task)).data;
      this.props.createTask(newTask);
      this.setState({
        name: "",
        important: false,
        dueDate: new Date()
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    const { name, important, dueDate } = this.state;
    const { handleDateChange, handleCancel, handleSubmit } = this;

    return (
      <FormGroup>
        <TextField
          id="standard-basic"
          label="Task"
          value={name}
          onChange={ev => this.setState({ name: ev.target.value })}
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarRateIcon />}
              checked={this.state.important}
              onChange={ev => this.setState({ important: ev.target.checked })}
            />
          }
          label="Important"
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Task Due Date"
            value={dueDate}
            onChange={date => handleDateChange(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <Grid container justify="space-evenly">
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleSubmit}>
            Add Task
          </Button>
        </Grid>
      </FormGroup>
    );
  }
}

export default Form;

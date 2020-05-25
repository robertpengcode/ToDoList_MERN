import React, { Component } from "react";
import axios from "axios";
//import { makeStyles } from "@material-ui/core/styles";
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
  constructor() {
    super();
    this.state = {
      name: "",
      important: "",
      dueDate: new Date()
    };
    //this.onSubmit = this.onSubmit.bind(this);
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
    console.log('sumbit!')
    const task = {
        name: this.state.name,
        important: this.state.important,
        dueDate: this.state.dueDate
    }
    try {
      await axios.post("/api/tasks", task).data;
    
      this.setState({
        name: "",
        important: false,
        dueDate: new Date()
      });
    } catch (ex) {
      //this.setState({ error: ex.response.data.message });
      console.log(ex)
    }
  }

  render() {
    //const classes = useStyles();
    //const { task } = this.state;
    const { name, important, dueDate } = this.state;
    const { handleDateChange, handleCancel, handleSubmit } = this;
    console.log("name", name);
    console.log("important", important);
    console.log("dueDate", dueDate);
    return (
      <FormGroup >
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
              name="checkedH"
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
            //onChange={ev => this.setState({dueDate: ev.target.dueDate })}
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

//   const useStyles = makeStyles({
//     desStyle: {
//       color: "black",
//       fontSize: 18
//     },
//     root: {
//       //maxWidth: 250,
//       width: 250,
//       background: "#fff59d",
//       margin: "1rem",
//       //maxHeight: 250
//       height: 250
//     }
//   });

//   async componentDidMount() {
//     const tasks = (await axios.get("/api/tasks")).data;
//     this.setState({ tasks });
//   }

{
  /* <FormControlLabel
          control={
            <Checkbox
            //   checked={state.checkedA}
            //   onChange={handleChange}
            //   name="checkedA"
            />
          }
          label="Important"
        />

<FormControlLabel
          control={
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarRateIcon />}
              name="checkedH"
            />
          }
          label="Important"
        /> */
}

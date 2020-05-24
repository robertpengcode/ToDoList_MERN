import React, { Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
//import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      task: {}
    };
  }

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

  render() {
    //const classes = useStyles();
    const { task } = this.state;
    return (
      <FormGroup >
        <TextField id="standard-basic" label="Task" />
        <FormControlLabel
          control={
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarRateIcon />}
              name="checkedH"
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
            //value={selectedDate}
            //onChange={handleDateChange}
            //   KeyboardButtonProps={{
            //     "aria-label": "change date"
            //   }}
          />
        </MuiPickersUtilsProvider>
        <Grid container justify="space-around">
          <Button variant="outlined" color="primary">
            Cancel
          </Button>
          <Button variant="outlined" color="secondary">
            Add Task
          </Button>
        </Grid>
      </FormGroup>
    );
  }
}

export default Form;

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

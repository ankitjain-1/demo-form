import { useState } from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Grid,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    prefix: "Mr",
    fullName: "",
    mobile: "",
    addLine1: "",
    addLine2: "",
    addLine3: "",
    town: "",
    city: "",
    postCode: "",
    country: "",
    customerType: "New",
    sourceLead: "Facebook",
    comments: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(state);
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <Container maxWidth="md">
        <form
          onSubmitCapture={(e) => {
            formSubmitHandler(e);
          }}
          className={classes.root}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <InputLabel id="prefix-label">Prefix</InputLabel>
              <Select
                name="prefix"
                value={state.prefix}
                labelId="prefix-label"
                id="prefix"
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              >
                <MenuItem value="Mr">Mr.</MenuItem>
                <MenuItem value="Mrs">Mrs.</MenuItem>
                <MenuItem value="Ms">Ms.</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="fullName"
                id="filled-basic"
                label="Full Name"
                variant="filled"
                value={state.fullName}
                onChange={(e) => {
                  inputChangeHandler(e);
                  console.log(state.fullName);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="mobile"
                type="number"
                id="filled-basic"
                label="Mobile Number"
                variant="filled"
                value={state.mobile}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="addLine1"
                id="filled-basic"
                label="Address Line 1"
                variant="filled"
                value={state.addLine1}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="addLine2"
                id="filled-basic"
                label="Address Line 2"
                variant="filled"
                value={state.addLine2}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="addLine3"
                id="filled-basic"
                label="Address Line 3"
                variant="filled"
                value={state.addLine3}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="town"
                id="filled-basic"
                label="Town"
                variant="filled"
                value={state.town}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="city"
                id="filled-basic"
                label="City"
                variant="filled"
                value={state.city}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="postCode"
                id="filled-basic"
                label="Post Code"
                variant="filled"
                value={state.postCode}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="country"
                id="filled-basic"
                label="Country"
                variant="filled"
                value={state.country}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="customer-type">Customer Type</InputLabel>
              <Select
                name="customerType"
                value={state.customerType}
                labelId="customer-type"
                id="customer-type-select"
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              >
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Old">Old</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="source-lead-lable">Source Lead</InputLabel>
              <Select
                name="sourceLead"
                value={state.sourceLead}
                labelId="source-lead-lable"
                id="source-lead-select"
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
              >
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Google">Google</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="comments"
                id="filled-basic"
                label="Comments"
                variant="filled"
                value={state.comments}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
                multiline
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Form;

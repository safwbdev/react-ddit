import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Container,
} from "@material-ui/core/";
import moment from "moment";

class TopicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const data = {
      id: new moment(new Date()).format("YYYYMMDDhmmss"),
      title,
      body,
      editing: false,
      saved: false,
      votes: 0,
    };
    this.props.addTopic(data);

    this.setState({
      title: "",
      body: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Create Topic</Typography>
          </Grid>
        </Grid>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                label="Topic Title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                rows={5}
                multiline={true}
                value={this.state.body}
                onChange={this.handleChange}
                name="body"
                label="Topic Body"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTopic: (data) => {
      dispatch({ type: "ADD_TOPIC", data });
    },
  };
};
export default connect(null, mapDispatchToProps)(TopicForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Paper, Button } from "@material-ui/core/";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import {
  upVote,
  downVote,
  editTopic,
  saveTopic,
  deleteTopic,
} from "../store/actions/topicActions";

class Topic extends Component {
  checkBody = (e) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return e.replace(urlRegex, function (url) {
      const newBody = '<a href="' + url + '" target="_blank">' + url + "</a>";
      return newBody;
    });
  };
  handleEdit = (id) => {
    this.props.editTopic(id);
  };
  handleSave = (id) => {
    this.props.saveTopic(id);
  };
  handleDelete = (id) => {
    this.props.deleteTopic(id);
  };
  handleUpvote = (id) => {
    this.props.upvote(id);
  };
  handleDownvote = (id) => {
    this.props.downvote(id);
  };
  render() {
    const { id, votes, title, body, saved } = this.props.topic;
    return (
      <Paper>
        <Grid container className="topic">
          <Grid item xs={1} className="votes-content">
            <Button variant="contained" onClick={() => this.handleUpvote(id)}>
              <KeyboardArrowUp />
            </Button>
            <p>{votes}</p>
            <Button variant="contained" onClick={() => this.handleDownvote(id)}>
              <KeyboardArrowDown />
            </Button>
          </Grid>
          <Grid item xs={11} className="topic-content">
            <h3>{title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: this.checkBody(body),
              }}
            />
          </Grid>
          <Grid item xs={12} className="action-buttons">
            <Button
              variant="contained"
              size="small"
              onClick={() => this.handleEdit(id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => this.handleDelete(id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => this.handleSave(id)}
            >
              {saved ? "Saved" : "Save"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTopic: (id) => {
      dispatch(deleteTopic(id));
    },
    saveTopic: (id) => {
      dispatch(saveTopic(id));
    },
    editTopic: (id) => {
      dispatch(editTopic(id));
    },
    upvote: (id) => {
      dispatch(upVote(id));
    },
    downvote: (id) => {
      dispatch(downVote(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Topic);

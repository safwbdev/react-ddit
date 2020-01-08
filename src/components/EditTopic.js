import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';

class EditTopic extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newBody = this.getBody.value;
    const data = {
      newTitle,
      newBody
    }
    this.props.dispatch({ 
      type: 'UPDATE_TOPIC', 
      id: this.props.topic.id, 
      data: data })
  }
  render() {
    return (
      <Paper> 
        <Grid 
          container 
          className="topic">
          <Grid 
            item 
            xs={1} 
            className="edit-mode" >
            <Edit />
            <p>Edit Mode</p>
          </Grid>
          <Grid 
            item 
            xs={11} 
            className="edit-content" >
            <form 
              onSubmit={this.handleEdit}>
              <input 
                required 
                type="text" 
                className="title-edit"
                ref={(input) => this.getTitle = input}
                defaultValue={this.props.topic.title} placeholder="Enter Topic Title" />
                <br /><br />
              <textarea 
                required 
                className="body-edit"
                maxLength="255"
                rows="5" 
                ref={(input) => this.getBody = input}
                defaultValue={this.props.topic.body} 
                cols="28" 
                placeholder="Enter Topic" />
                <br /><br />
                <Grid item 
                  xs={12} 
                  className="update-row" >
                  <Button 
                    size="small" 
                    variant="contained" 
                    type="submit">
                    Update
                  </Button>
                </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default connect()(EditTopic);

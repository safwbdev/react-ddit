import React, { Component } from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import moment from 'moment'

class TopicForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body =  this.getBody.value;
    const data = {
      id: new moment(new Date()).format('YYYYMMDDhmmss'),
      title,
      body,
      editing:false,
      saved:false,
      votes:0
    }

    this.props.dispatch({
      type:'ADD_TOPIC',
      data});
      
    this.getTitle.value = '';
    this.getBody.value = '';
    this.props.history.push('/');
  }
  render() {
    return (
        <div>
            <h1>Create Topic</h1>
            {moment(new Date()).format('YYYYMMDDhmmss')}
            <Grid container>
                <Grid item xs={12} className="create-topic" >
                    <form onSubmit={this.handleSubmit}>
                        <input required 
                            type="text" ref={(input)=>this.getTitle = input} 
                            className="title-edit"
                            placeholder="Enter Topic Title"/>
                        <br /><br />
                        <textarea required 
                            rows="5" 
                            ref={(input)=>this.getBody = input} 
                            cols="28" 
                            className="body-edit"
                            maxLength="255"
                            placeholder="Enter Topic" />
                        <br /><br />
                        <Button 
                            variant="contained" 
                            type="submit">
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
          </div>
    );
  }
}
export default connect()(TopicForm);
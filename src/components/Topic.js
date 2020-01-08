import React, { Component } from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

class Topic extends Component {

  checkBody = (e) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return e.replace(urlRegex, function(url) {
        const newBody = '<a href="' + url + '" target="_blank">' + url + '</a>';
        return newBody;
    })
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
            className="votes-content" >
            <Button 
              variant="contained" 
              onClick={()=>this.props.dispatch({type:'UPVOTE',id:this.props.topic.id})}>
              <KeyboardArrowUp />
            </Button>
            <p>{this.props.topic.votes}</p>
            <Button 
              variant="contained" 
              onClick={()=>this.props.dispatch({type:'DOWNVOTE',id:this.props.topic.id})}>
                <KeyboardArrowDown />
              </Button>
          </Grid>
          <Grid 
            item 
            xs={11} 
            className="topic-content">
            <h3>{this.props.topic.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: this.checkBody(this.props.topic.body) }} />
          </Grid>
          <Grid 
            item 
            xs={12} 
            className="action-buttons">
            <Button 
              variant="contained" 
              size="small"
              onClick={
                ()=>this.props.dispatch({
                  type:'EDIT_TOPIC',
                  id:this.props.topic.id
                })
              }>Edit</Button>
            <Button 
              variant="contained" 
              size="small"
              onClick={
                ()=>this.props.dispatch({
                  type:'DELETE_TOPIC',
                  id:this.props.topic.id
                })
              }>Delete</Button>
            <Button 
              variant="contained" 
              size="small"
              onClick={
                ()=>this.props.dispatch({
                  type:'SAVE_TOPIC',
                  id:this.props.topic.id
                })
              }>
              {this.props.topic.saved ? "Saved" : "Save"}
              </Button>
          </Grid>
        </Grid>
      </Paper>
  );
 }
}
export default connect()(Topic);
import React from 'react';
import TopicForm from './components/TopicForm';
import AllTopics from './components/AllTopics';
import SavedTopics from './components/SavedTopics';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Container} from '@material-ui/core'
import './App.scss';

function App() {
  return (
    <Router>
      <NavBar/>
    <Container>
      <Route exact path="/"  component={AllTopics}  />
      <Route exact path="/saved"  component={SavedTopics}  />
      <Route path="/submit" component={TopicForm} />
    </Container>
  </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Topic from './Topic';
import EditComponent from './EditTopic';
import Grid from '@material-ui/core/Grid';

class AllTopics extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 1,
            topicsPerPage: 20
        }
    }
    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
          });

    }

    render() {
        const topicCount = this.props.topics.length;
        
        // sort topics by votes
        let topicArray = this.props.topics.sort(function(a, b) {
            return parseFloat(b.votes) - parseFloat(a.votes);
        });
        
        // code for pagination
        const { currentPage, topicsPerPage } = this.state;
        const indexOfLastTopic = currentPage * topicsPerPage;
        const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
        const currentTopics = topicArray.slice(indexOfFirstTopic, indexOfLastTopic);

        const renderTopics = currentTopics.map((topic) => (
            <div key={topic.id}>
                {topic.editing ? <EditComponent topic={topic} key={topic.id} /> : <Topic key={topic.id} topic={topic} />}
            </div>
        ));

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.topics.length / topicsPerPage); i++) {
            pageNumbers.push(i);
        }
  
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <h1>All Topics</h1>
                {topicCount >= 10 ? (<p>Showing {topicsPerPage} of {topicCount } topics</p>) : (<p>Showing {topicCount } topics</p>)}
                <Grid container>
                    <Grid item xs={12}>
                        {renderTopics}
                    </Grid>
                    <Grid item xs={12}>
                        <ul className="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </Grid>
                </Grid>

                {/* no topics */}
                {topicCount === 0 ? (
                    <div>
                        <h3>There are no topics to show.</h3>
                        <p>Click <Link to="/submit">here</Link> to create a new topic.</p>
                    </div>
                ) :'' }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state
    }
}
export default connect(mapStateToProps)(AllTopics);
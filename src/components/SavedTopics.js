import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './Topic';
import EditComponent from './EditTopic';

class SavedTopics extends Component {
    render() {

        // sort topics
        let topicArray = this.props.topics.sort(function(a, b) {
            return parseFloat(b.id) - parseFloat(a.id);
        });
        return (
            <div>
                <h1>Saved Topics</h1>
                {topicArray.map((topic) => (
                    <div key={topic.id}>
                        {topic.saved ? topic.editing ? <EditComponent topic={topic} key={topic.id} /> : <Topic key={topic.id} topic={topic} /> : ''}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state
    }
}
export default connect(mapStateToProps)(SavedTopics);
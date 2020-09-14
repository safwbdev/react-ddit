import data from "./data";

const postReducer = (
  state = data,
  // [],
  action
) => {
  switch (action.type) {
    case "ADD_TOPIC":
      return state.concat([action.data]);
    case "DELETE_TOPIC":
      return state.filter((topic) => topic.id !== action.id);
    case "EDIT_TOPIC":
      return state.map((topic) =>
        topic.id === action.id ? { ...topic, editing: !topic.editing } : topic
      );
    case "SAVE_TOPIC":
      console.log("clicked saved");
      return state.map((topic) =>
        topic.id === action.id ? { ...topic, saved: !topic.saved } : topic
      );
    case "UPDATE_TOPIC":
      return state.map((topic) => {
        if (topic.id === action.id) {
          return {
            ...topic,
            title: action.data.newTitle,
            body: action.data.newBody,
            editing: !topic.editing,
          };
        } else return topic;
      });
    case "UPVOTE":
      return state.map((topic) => {
        if (topic.id === action.id) {
          return {
            ...topic,
            votes: topic.votes + 1,
          };
        } else return topic;
      });
    case "DOWNVOTE":
      return state.map((topic) => {
        if (topic.id === action.id) {
          return {
            ...topic,
            votes: topic.votes - 1,
          };
        } else return topic;
      });
    default:
      return state;
  }
};
export default postReducer;

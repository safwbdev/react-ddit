export const upVote = (id) => {
  return { type: "UPVOTE", id: id };
};
export const downVote = (id) => {
  return { type: "DOWNVOTE", id: id };
};
export const editTopic = (id) => {
  return { type: "EDIT_TOPIC", id: id };
};
export const saveTopic = (id) => {
  return { type: "SAVE_TOPIC", id: id };
};
export const deleteTopic = (id) => {
  return { type: "DELETE_TOPIC", id: id };
};
export const addTopic = (data) => {
  return { type: "ADD_TOPIC", data };
};
export const updateTopic = (id, data) => {
  return { type: "UPDATE_TOPIC", id: id, data: data };
};

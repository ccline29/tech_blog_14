const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This app is amazing!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Great development team!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I love this app!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Nothing but the best!",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
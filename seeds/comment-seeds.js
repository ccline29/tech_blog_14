const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "What a pitcher!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Star of the game!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Absolutely unhittable!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "What a game!",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
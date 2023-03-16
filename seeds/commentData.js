const { Comment } = require('../models');

const commentdata = [
    {
        "contents": "This is a great article.  I learned a lot.",
        "date_created": "02/02/2011",
        "user_id": 1,
        "post_id": 2
    },
    {
        "contents": "Great Article!",
        "date_created": "07/07/2011",
        "user_id": 1,
        "post_id": 3
    },
    {
        "contents": "This may be the best article I have ever read.  Thank you for writing this.",
        "date_created": "09/09/2013",
        "user_id": 2,
        "post_id": 4
    },
    {
        "contents": "I love this article.  I learned so much.  Thank you for writing this.",
        "date_created": "03/23/2012",
        "user_id": 3,
        "post_id": 1
    },
    {
        "contents": "Can't wait to read more!",
        "date_created": "01/19/2012",
        "user_id": 4,
        "post_id": 2
    },
    {
        "contents": "Please write more articles like this.  I love reading them.",
        "date_created": "08/14/2012",
        "user_id": 1,
        "post_id": 1
    },
    {
        "contents": "What a great read!",
        "date_created": "06/04/2013",
        "user_id": 3,
        "post_id": 3
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
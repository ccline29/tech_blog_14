const { Post } = require('../models');

const postdata = [
    {
        "title": "Learing to Code",
        "contents": "Learning to code can be difficult, but stick with it and practice practice practice.  Things will begin to make sense after you have a moment to let it sink in.",
        "date_created": "10/18/2022",
        "user_id": 1
    },
    {
        "title": "Mastering CSS",
        "contents": "There are so many ways to make something look great.  Keep up the great work and study the new techniques and you will become a master at CSS in no time!",
        "date_created": "10/17/2022",
        "user_id": 2
    },
    {
        "title": "Gaining new ground in AI",
        "contents": "With ChatGPT and GalelioAI things are moving quickly in the AI world.  Don't worry about your job though.  Companies will still need software developers for the foresseable future.",
        "date_created": "07/07/2021",
        "user_id": 3
    },
    {
        "title": "Generating Handlebar templates",
        "contents": "Make sure to review the documentation and pracitce until you become a master.",
        "date_created": "04/17/2020",
        "user_id": 1
    },
    {
        "title": "Clean Code",
        "contents": "This will help you produce Clean Code and make your code easier to read.  You always want to keep up with current standards.",
        "date_created": "02/14/2023",
        "user_id": 4
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
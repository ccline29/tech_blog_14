const { Post } = require('../models');

const postdata = [
    {
        "title": "Introduction to HTML",
        "contents": "HTML is the foundation of the web.  It is the first thing you should learn when you start to code.  It is the building blocks of the web.",
        "date_created": "10/16/2010",
        "user_id": 1
    },
    {
        "title": "Building a portfolio",
        "contents": "You should build a portfolio to show off your skills.  It is a great way to get a job.  You can also use it to show off your skills to friends and family.",
        "date_created": "10/17/2010",
        "user_id": 2
    },
    {
        "title": "Introduction to CSS",
        "contents": "CSS is the next step in learning web development.  It is used to style your HTML.  It is a great way to make your website look great.",
        "date_created": "07/07/2011",
        "user_id": 3
    },
    {
        "title": "Introduction to JavaScript",
        "contents": "JavaScript is the next step in learning web development.  It is used to make your website interactive.  It is a great way to make your website more dynamic.",
        "date_created": "04/17/2012",
        "user_id": 1
    },
    {
        "title": "Introduction to Node.js",
        "contents": "Node.js is the next step in learning web development.  It is used to make your website interactive.  It is a great way to make your website more dynamic.",
        "date_created": "02/14/2013",
        "user_id": 4
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
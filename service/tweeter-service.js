let dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "../../../images/headshot.JPG",
            "logo-image": "../../../images/headshot.JPG",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet)
            .then((insertedTweet) => res.json(insertedTweet));
    }
    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then(status => res.send(status));


    const likeTweet = (req, res) =>{
        console.log(req.body)
        return dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status))}


    const findTweetById = (req, res) =>
        dao.findTweetById(req.params.id)
            .then(tweet => res.json(tweet));

    app.get("/api/tweets", findAllTweets);
    app.get("api/tweets/:id", findTweetById);
    app.post("/api/tweets", postNewTweet);
    app.delete("/api/tweets/:id", deleteTweet);
    app.put("/api/tweets/:id", likeTweet);
};
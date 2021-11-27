//let profile = require('../data/profile.json');
const dao = require('../db/profile/profile-dao')
module.exports = (app) => {

    const findAllProfile = (req, res) =>
        dao.findAllProfile()
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));

    app.get('/api/profile', findAllProfile);
    app.get('/api/profile/:id', findProfileById);
    app.put('/api/profile/:id', updateProfile);
};
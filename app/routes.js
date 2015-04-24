var Race = require('./models/race');

module.exports = function(app, passport) {


    // server routes ===========================================================
    // handle things like api calls

    app.route('/api/races')
        .post(function(req, res){
           var race = new Race();
            race.name = req.body.name;
            race.location = req.body.location;
            race.sport = req.body.sport;
            race.date = req.body.date;

            race.save(function(err){
                if (err)
                    res.send(err);

                res.json({message : 'race created'});
            })
        })
        .get(function (req, res){
            Race.find(function (err, races){
                if (err)
                    res.send(err);

                res.json(races);
            });
        });

    app.route('/api/races/:race_id')
        .get(function (req, res){
            Race.findById(req.params.race_id, function(err, race){
               if (err)
                   res.send(err);

                res.json(race);
            });
        })
        .put(function (req, res){
            Race.findById(req.params.race_id, function (err, race){
                if (err)
                    res.send(err);

                race.name = req.body.name;

                race.save(function(err){
                    if (err)
                        res.send(err);

                    res.json({message: 'race updated'});
                });
            });
        })
        .delete(function (req, res){
            Race.remove({
                _id: req.params.race_id
            }, function(err, race){
                if (err)
                    res.send(err);

                res.json({message: 'race deleted'});
            });
        });


    // sample api route
    app.get('/api', function(req, res){
        res.json({ message : 'you have found our api'});
    });


    // frontend routes =========================================================
    // route to handle all angular requests

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/account',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/account',
        failureRedirect : '/login',
        failureFlash : true
    }));


    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};


function isLoggedIn(req, res, next){
    if (req.isAuthenticated())
        return next;

    res.redirect('/');
}

var Race = require('./models/race');

    module.exports = function(app) {

        app.use(function(req, res, next){
            console.log('something is happening');
            next();
        });
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

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

/*
        app.get('/api/races', function(req, res) {
            // use mongoose to get all races in the database
            Race.find(function(err, races) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(races); // return all races in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/api/races', function(req, res){
            var race = new Race();
            race.name = req.body.name;
            race.sport = req.body.sport;
            race.location = req.body.location;
            race.date = req.body.date;

            race.save(function(err){
               if (err)
                   res.send(err);

                res.json({message : 'race created'});
            });
        });
*/
        // route to handle delete goes here (app.delete)

        app.get('/api', function(req, res){
            res.json({ message : 'you have found our api'});
        });


        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };

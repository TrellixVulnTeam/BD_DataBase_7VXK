var express = require('express'),
    router = express.Router();

var userRoutes = require('./userRoutes');

router
    .get('/', function(req, res) {
        res.render("home.ejs")
    })

    .post('/', function(req, res) {
        let search = { 
            range: req.body.range,
            stock: req.body.searchStock
        };

        console.log(`stock: ${search.stock}`);
        console.log(`range: ${search.range}`);


        res.render("home.ejs", search);
    })

    .post('/search', function(req, res){
        res.render("profile.ejs")
    })

.use('/userRoutes', userRoutes);

function searchFunc(req, res){
    res.render("profile.ejs")
}


module.exports = router;
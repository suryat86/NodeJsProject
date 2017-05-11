var express = require('express');

var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData =[{
            name:'Event 1',
            description:'The first event',
            date:'05.10.2017',
            time:'11:13 PM',
            duration:'1 hour',
            location:{
                StreetAddr:'101 plot no',
                city:'Los Ang',
                state:'CA',
                zip:'87885',
                longitude:213,
                latitde:123
            },
            capacity:100
              },
             {
             name:'Event 2',
            description:'The second event',
            date:'05.10.2017',
            time:'11:13 PM',
            duration:'1 hour',
            location:{
                StreetAddr:'101 plot no',
                city:'Los Angeles',
                state:'CA',
                zip:'87885',
                longitude:213,
                latitde:123
             },
             capacity:200
             },
             {
                 
            name:'Event 3',
            description:'The third event',
            date:'05.10.2017',
            time:'11:13 PM',
            duration:'1 hour',
            location:{
                StreetAddr:'101 plot no',
                city:'Los Ang',
                state:'CA',
                zip:'87885',
                longitude:213,
                latitde:123
            },
            capacity:1000
              },
              {
                  
            name:'Event 4',
            description:'The fourth event',
            date:'05.10.2017',
            time:'11:13 PM',
            duration:'1 hour',
            location:{
                StreetAddr:'101 plot no',
                city:'Los Ang',
                state:'CA',
                zip:'87885',
                longitude:213,
                latitde:123
            },
            capacity:450
              }
             ];
 dbRouter.route('/AddEventData')
.get(function(req, res){
   var url = 'mongodb://localhost:27017/eventsApp';
   mongodb.connect(url, function(err, db){
       var collection = db.collection('events');
       
       collection.insertMany(eventsData, function(err,results){
           res.send(results);
           db.close();
           
       });
       
   });
 });


module.exports = dbRouter;
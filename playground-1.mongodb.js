// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('SampleCollections');

// test
// db.getCollection('Sakila_films').find({});

// question 1
// db.getCollection('Sakila_films').find(
//     {
//         Category: /horror/i,
//         Description: /documentary/i,
//     }
// );

// question 2
// db.getCollection('Sakila_films').find({
//     Rating: "G",
// }).count();
// db.getCollection('Sakila_films').countDocuments({Rating: "G"});

// question 3
// db.getCollection('video_movieDetails').find({ 
//     $or:[
//         { year: 2012 },
//         { year: 2013 }
//     ], $and: [
//         { 
//             runtime: { $gt: 60 }, 
//             runtime: { $lt: 150 } 
//         },
//     ]
// });
// db.getCollection('video_movieDetails').find({
//     year: { $in: [2012, 2013] },
//     runtime: { $gt: 60, $lt: 150 },
// });

// question 4
// db.getCollection('video_movieDetails').find({ 
//     "tomato.image": "certified"
// });

// question 5
// db.getCollection('Sakila_films').find({
//     Actors: {
//         $elemMatch: {
//             "First name": "ED",
//             "Last name": "CHASE",
//         }
//     }
// });

// question 6
// db.getCollection('Sakila_films').aggregate(
//     {
//         $group: {
//             _id: "$Rating",
//             count: { $sum: 1 },
//         }
//     }
// )
// db.getCollection('Sakila_films').aggregate(
//     {
//         $group: {
//             _id: "$Rating",
//             count: { $count: {} },
//         }
//     }
// )

// db.getCollection('video_movieDetails').find({});

// db.getCollection('video_movieDetails').find({})
// db.getCollection('video_movieDetails').aggregate([
//     { 
//         $unwind: "$actors" 
//     },
//     {
//         $group: {
//             _id: {actor: "$actors", rated: "$rated"},
//             avgRating: {
//                 $avg: "$imdb.rating"
//             },
//             movies: { 
//                 $addToSet: {
//                     title: "$title",
//                     rating: "$imdb.rating"
//                 } 
//             }
//         }
//     },
//     {
//         $group: {
//             _id: "$_id.actor",
//             rateds: {
//                 $addToSet: {
//                     rated: "$_id.rated",
//                     avgRating: "$avgRating",
//                     movies: "$movies"
//                 }
//             }
//         }
//     }
// ]);

// db.video_movieDetails
// lister pour chaque genre de films, 
// les différents rated (rated), avec le pire film 
// et le meilleur film selon imdb
// ? pas terminé
// db.video_movieDetails.aggregate([
//     { 
//         $unwind: "$genres" 
//     },
//     {
//         $group: {
//             _id: {
//                 genre: "$genres",
//                 rated: "$rated"
//             },
//             rating: {
//                 $min: "$imdb.rating"
//             }
//         }
//     },
// ]);

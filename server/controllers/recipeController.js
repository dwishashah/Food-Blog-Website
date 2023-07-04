require('../models/database')
const Category = require("../models/Category")


// /**
//  * GET /
//  * Homepage 
// */
exports.homepage = async(req, res) => {
    res.render('index', {title: 'Cooking Blog - Home'})
}

// async function insertData(){
//     try{
//         await Category.insertMany([
//             {
//                 "name": "Asian",
//                 "image": "asian.jpeg"
//             },
//             {
//                 "name":"Italian",
//                 "image":"italian.jpeg"
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican.jpeg"
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian.jpg"
//             },
            
//         ])
//     } catch(error){
//         console.log(error)
//     }
// }
// insertData()

const User = require('../models/user')

module.exports = {

    addUser(req){
        return new Promise((resolve, reject) => {
            var userToBeInserted = new User({
                name: req.body.name,
                birthday: req.body.birthday,
                favouriteFood: req.body.favouriteFood
            });
            User.find({name : req.body.name,birthday: req.body.birthday,favouriteFood: req.body.favouriteFood}, function (err, docs) {
                if (docs.length){
                    console.log("User "+req.body.name+" already exists")
                    resolve(docs)
                }else{
                    userToBeInserted.save( function(err, item){
                        if (err)
                            reject(err);
                        else
                            resolve(item);
                    });
                }
            });

        });
    },

}
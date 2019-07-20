const express = require('express');
var router = express.Router();

var { Student } = require('../model/student.js');

var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error....' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    if (!req.body._id) {
        console.log(req);
        var stu = new Student({
            name: req.body.name,
            password: req.body.password,
            rollnumber: req.body.rollnumber,
            email: req.body.email,
        });
        stu.save((err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                console.log('error in saving' + JSON.stringify(err, undefined, 2));
            }
        });
    }
    else {
        console.log("in else")
        var stu = Student({
            name: req.body.name,
            password: req.body.password,
            rollnumber: req.body.rollnumber,
            email: req.body.email,
        });
        Student.findOneAndUpdate({_id                                                                                                                                                                                                               :req.body._id}, {$set:{name:req.body.name,password:req.body.password,rollnumber:req.body.rollnumber,email:req.body.email}} ,{upsert:true}, (err, doc) => {
            if (!err) {
                res.send(doc);
            }
            else {
                console.log("error in update :" + JSON.stringify(err, undefined, 2));
            }
        });
    }

});

router.get('/:id', (req, res) => {
    // if(!ObjectId.isValid(req.params.id))
    // {
    //     return res.status(400).send("No record :${req.params.id}");
    // }
    Student.find({ rollnumber: req.params.id }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("error in retriving:" + JSON.stringify(err, undefined, 2));
        }
    })
});

// router.put('/:id',(req,res)=>
// {
//      if(!ObjectId.isValid(req.params.id))
//     {
//         return res.status(400).send("No record :${req.params.id}");
//     }

//     var stu=Student({
//         name:req.body.name,
//         password:req.body.password,
//         rollnumber:req.body.rollnumber,
//         email:req.body.email,
//     });
//     Student.findByIdAndUpdate(req.params.id,{$set:stu},(err,doc)=>
//         {
//            if (!err)
//            {
//                 res.send(doc);
//            } 
//            else
//            {
//                console.log("error in update :"+JSON.stringify(err,undefined,2));
//            }
//         });

// });


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send("No record :${req.params.id}");
    }
    Student.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) {
            res.send(doc);
        }
        else {
            console.log("error in delete :" + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;

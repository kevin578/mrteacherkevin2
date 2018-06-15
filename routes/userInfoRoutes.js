const router = require('express').Router();
const mongoose = require('mongoose');
const Users = require('../models/user');

const errorMessage = "Something went wrong"
const successMessage = "Successfully saved"

router.get('/api/getStateFromDatabase', (req,res)=> {
    const id = req.user;
    Users.findById(id, ((err, user)=> {
      if (err) {
        res.send(errorMessage)
      }
      else {
        res.json(user)
      }
    }))
})

router.put('/api/editCompletedPages', (req, res)=> {
    const id = req.user;

    const subject = req.body.subject;
    const pageNumber = req.body.pageNumber;
    const stateCopy = req.body.store==null? {}:req.body.store

    if (subject in stateCopy && !stateCopy[subject].includes(pageNumber)) {
        stateCopy[subject].push(pageNumber)
    }
    else if (!(subject in stateCopy)) {
        stateCopy[subject] = [pageNumber]
    }

    Users.findByIdAndUpdate(id, {completed: stateCopy},(err, data)=> {
            if (err) res.send(errorMessage);
            else res.send(successMessage);
        }
    );
})

router.put('/api/editAchievements', (req, res)=> {

    const subject = req.body.subject;
    const ranking = req.body.ranking;
    const stateCopy = req.body.store==null? {}:req.body.store


    if (subject in stateCopy && !stateCopy[subject].includes(ranking)) {
        stateCopy[subject].push(ranking)
    }
    else if (!(subject in stateCopy)) {
        stateCopy[subject] = [ranking]
    }

    Users.findByIdAndUpdate(req.user.id, {achievements: stateCopy}, (err, data)=> {
        if (err) res.send(errorMessage);
        else res.send(successMessage)
    })


})

router.put('/api/setScore', (req, res)=> {
    Users.findByIdAndUpdate(req.user.id, {
        score: req.body.score
    }, (err, data)=> {
        if (err) res.send(errorMessage)
        else res.send(successMessage)
    })
})



module.exports = router;
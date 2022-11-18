
const express = require('express');
const router = express.Router();

const Place = require('./../models/place');

router.get("/listado", (req, res, next) => {


    Place
        .find()
        .then(place => {
            res.render('coffes_books/list', { place })
        })
        .catch(err => console.log(err))

})

router.get("/crear", (req, res, next) => {
    res.render("coffes_books/create")
})

router.post("/crear", (req, res, next) => {
    const { name, type } = req.body

    Place
        .create({ name, type })
        .then(() => res.redirect('/listado'))
        .catch(err => console.log(err))

})

router.get("/editar/:place_id", (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            res.render('coffes_books/edit', place)
        })
        .catch(err => console.log(err))

})
router.post("/editar/:place_id", (req, res, next) => {
    const { name, type } = req.body
    const { place_id } = req.params

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect(`/listado`))
        .catch(err => console.log(err))
})

router.post('/eliminar/:place_id ', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/listado'))
        .catch(err => console.log(err))

})

router.get('/mapa', (req, res, next) => {
    res.render('coffes_books/maps')

})





















module.exports = router;
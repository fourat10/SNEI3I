const express = require("express");
const router = express.Router();
const { getter, GetBySpeciality } = require('../controllers/search.controller');

// Routes for search functionality

router.get('/speciality/:speciality', GetBySpeciality);
router.get('/:motcle/:location', getter);
module.exports = router;
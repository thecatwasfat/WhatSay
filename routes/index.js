var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WhatSay' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'WhatSay - Admin' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});


router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Login' });
});

module.exports = router;

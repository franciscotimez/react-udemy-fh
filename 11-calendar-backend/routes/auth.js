const { Router } = require('express');

const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');


router.post('/', loginUser);

router.post('/new', createUser);

router.get('/renew', renewToken);

module.exports = router;
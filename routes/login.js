const router = require('express').Router();

const User = {
    name: 'Test Kullanıcısı',
    email: 'test@test.com',
    password: 'test123'
};

router.post('/', async (req, res) => {
    if (req.body.email === User.email && req.body.password === User.password) {
        res.json({
            token: 'fake-jwt-token'
        });
    } else {
        res.json({
            error: 'Kullanıcı adı veya şifre hatalı'
        });
    }
});

module.exports = router;

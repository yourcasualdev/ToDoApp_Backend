const isAuthorized = (req, res, next) => {
    if (req.headers.token === 'fake-jwt-token') {
        next();
    } else {
        res.json({
            error: 'Kullanıcı adı veya şifre hatalı'
        });
    }
}

module.exports = isAuthorized;
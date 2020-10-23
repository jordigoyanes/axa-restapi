const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        req.headers.authorization = "";
    }
    next();
}

export default auth;
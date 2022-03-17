const validAccess = async (req, res, next) => {
    if (req.user.acessLevel == 0 || req.user.acessLevel == 4) {
        return next();
    } else {
        return res.json({ error: "Access denied" });
    }
};

module.exports = validAccess;
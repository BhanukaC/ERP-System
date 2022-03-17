const validAccess = async (req, res, next) => {
    if (req.user.acessLevel == 0) {
        return next();
    } else {
        return res.json({ error: "Access denied" });
    }
};

module.exports = validAccess;
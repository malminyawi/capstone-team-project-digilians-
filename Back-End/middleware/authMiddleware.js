const jwt = require('jsonwebtoken')
const authMiddleware = (res, res, next) => {
    try {
        const authHead = req.headers.authorization
        if (!authHead) return res.status(401).json({ message: "token required" })
        const token = authHead.split(" ")[0]

        const payload = jwt.verify(token, process.env.JWT_SK)
        req.user = payload.id
        next()

    } catch (error) {
        next(error)
    }
}
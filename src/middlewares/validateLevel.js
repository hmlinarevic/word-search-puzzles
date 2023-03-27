/**
 * Validate Word Search getLevel() request.
 * Valid levels are from 1 to 10.
 */

export const validateLevel = (req, res, next) => {
    const { level } = req.params

    const isValidReq = level && level >= 0 && level <= 10

    if (!isValidReq) {
        res.send({ message: "invalid word search level" })
    } else {
        next()
    }
}

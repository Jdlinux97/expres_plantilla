const functions = require('../functions')
module.exports = {
    init: async (req, res) => {
        const response = await functions.my_function(req, res)
        res.io.emit("hello", "Hello World")
        res.status(response.statusCode).json(response)
    }
}

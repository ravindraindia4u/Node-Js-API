const controller = require('../controller/controller')

module.exports = (routes) => {
    routes.get('/hello_world', controller.messageController);
}
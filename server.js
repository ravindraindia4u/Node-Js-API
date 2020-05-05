var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    connectdb = require('./config/database/mongodb').connect,
    swagger_ui = require('swagger-ui-express'),
    swagger_doc = require('./app/lib/swagger-ui/api_docs')

require('./app/routes/routes')(app);
require('dotenv/config');

app.use(bodyparser.json());

app.use('/swagger/api', swagger_ui.serve, swagger_ui.setup(swagger_doc));

app.get('/',(req,res) => {
    res.send("Server Running");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: " + process.env.PORT);
    connectdb;
});
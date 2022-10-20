const express =  require('express');
const bodyParser = require('body-parser');
const login = require('./src/account/loginController')
const assetController = require('./src/assets/AssetController')
const statementController = require('./src/statement/statementController')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const ONE_DAY = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'thisissecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: ONE_DAY}
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', login)
app.use('/assets', assetController);
app.use('/statement', statementController);
app.listen(3000, () => console.log("App Listening to 3000"));

module.exports = {app};
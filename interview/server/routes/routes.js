
const userRoutes = require('./users');

const appRouter = (app, fs) => {

   
    app.get('/', (req, res) => {
        res.send('welcome to the interview api server');
    });

    
    userRoutes(app, fs);

};

module.exports = appRouter;
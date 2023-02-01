const path = require("path");
const express = require("express");
const csrf = require("csurf");
const expressSession = require("express-session");
const createSessionConfig = require("./config/session");
const checkAuthStatusMiddleware = require('./middlewares/check-auth');

const authRoutes = require("./routes/auth.routes");
const productRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();
const db = require("./data/database");
const addCSRFToken = require("./middlewares/csrf-token");
const errorHandler = require("./middlewares/error-handler");
const sessionConfig = createSessionConfig();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession(sessionConfig));
app.use(csrf());
app.use(addCSRFToken);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use('/admin', adminRoutes);
app.use(errorHandler);

db.connectToDatabase()
    .then(function() {
    app.listen(3000);
}).catch(function(error) {
    console.log("Failed to connect to the database!");
    console.log(error);
});
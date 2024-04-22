// server.js
const express = require("express");
const path = require("path");
const session = require("express-session");
const errorHandler = require("./middleware/errorPageHandler");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Cloudinary

const { configureCloudinary } = require("./config/cloudinary.config");
configureCloudinary();

app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/admin/blog", express.static(path.join(__dirname, "public/admin")));
app.use("/", express.static(path.join(__dirname, "public/portfolio")));

app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY || "default_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

const adminRoutes = require("./routes/admin.routes");
const portfolioRoutes = require("./routes/portfolio.routes");
const sessionChecker = require("./middleware/auth");

app.use("/admin", adminRoutes, sessionChecker);
app.use("/", portfolioRoutes);

app.use("*", async (req, res, next) => {
  const error = new Error(
    "Unfortunately, the page you are looking for does not exist."
  );
  error.status = 404;
  next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

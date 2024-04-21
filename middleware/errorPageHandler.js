// errorPageHandler.js
const errorHandler = async (err, req, res, next) => {
  const status = err.status || 500;
  const pageTitle = status === 404 ? "Page Not Found" : "Internal Server Error";
  const message = err.message || "An unexpected error occurred";

  res.status(status).render("admin/error", {
    error: req.app.get("env") === "development" ? err : {},
    title: pageTitle,
    img: "app-assets/images/pages/404.png",
    status: status,
    message: message,
    isLoginPage: false,
    isIndexPage: false,
    isErrorPage: true,
  });
};

module.exports = errorHandler;

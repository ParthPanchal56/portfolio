exports.getLoginPage = async (req, res, next) => {
  try {
    // Simulating asynchronous operation, if there's anything to fetch asynchronously
    await Promise.resolve(); // This is just a placeholder
    res.render("admin/login", {
      title: "Login",
      isLoginPage: true,
      isIndexPage: false,
    });
  } catch (error) {
    // Forward to error handling middleware
    next(error);
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    // Simulating asynchronous operation, if there's anything to fetch asynchronously
    await Promise.resolve(); // This is just a placeholder
    req.session.isLoggedIn = true;
    res.redirect("/admin/blog");
  } catch (error) {
    // Forward to error handling middleware
    next(error);
  }
};


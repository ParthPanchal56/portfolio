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

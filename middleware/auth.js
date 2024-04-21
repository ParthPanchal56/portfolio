function sessionChecker(req, res, next) {
  // Check if user session property exists, replace 'userId' with your session property
  if (req.session.userId) {
    next(); // Continue if the session exists
  } else {
    res.redirect("/admin/login"); // Redirect to login page if there is no user session
  }
}
module.exports = sessionChecker;

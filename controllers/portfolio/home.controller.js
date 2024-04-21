exports.getHomePage = async (req, res, next) => {
  try {
    await Promise.resolve();
    res.render("index", {
      title: "Home",
    });
  } catch (error) {
    next(error);
  }
};

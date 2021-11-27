const withAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
    // res.send(
    //   '<script>alert("You need to be authenticated to access this page")</script>'
    // );
    // setTimeout(function () {
    //   res.redirect("/login");
    // }, 4000);
  }
};

module.exports = withAuth;

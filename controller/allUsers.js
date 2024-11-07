async function AllUsers(req, res) {
  try {
    console.log("user id", req.userId);
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = AllUsers;

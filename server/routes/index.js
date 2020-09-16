const path = require("path");
const router = require("express").Router();
const authRoutes = require("./passport");
const apiRoutes = require("./api");

// Auth Routes
router.use('/passport', passportRoutes);

// API Routes
router.use("/api", apiRoutes);

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
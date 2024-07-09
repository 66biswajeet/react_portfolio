const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth-controller");

// Error handling middleware
const handleErrors = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.statusCode || 500).json({ message: "An error occurred" });
  next();
};

router.route("/card").post(controller.cards, handleErrors);
router.route("/card").get(controller.cards, handleErrors);
router.route("/card/:id").delete(controller.cards, handleErrors);

router.route("/contact").post(controller.contacts, handleErrors);
router.route("/contact").get(controller.contacts, handleErrors);
router.route("/contact/:id").delete(controller.contacts, handleErrors);

module.exports = router;

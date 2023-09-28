const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestController");
const { handleError } = require("../utils/handleErrors");
const usersRestController = require("../users/routes/usersRestController");

router.use("/cards", cardsRestController);
router.use("/users", usersRestController);
// router.use("/saved-cards", cardsRestController);

router.get("/", async (req, res) => {
  try {

  } catch (error) {
    // Handle errors
  }
});

router.use((req, res) => {
  handleError(res, 404, "Page not found!");
});

module.exports = router;

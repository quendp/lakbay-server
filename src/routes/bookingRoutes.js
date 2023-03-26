const express = require("express");
const { BookingController } = require("../controllers/bookings.controllers");
const router = express.Router();
const passport = require("passport");

router.post(
  "/addBooking",
  passport.authenticate("jwt", { session: false }),
  BookingController.addBooking
);

module.exports = router;

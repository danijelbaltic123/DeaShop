const express = require("express");

const usersControllers = require("../Controllers/Users-controller");

const router = express.Router();

router.get("/svi-korisnici", usersControllers.allProfiles)

router.get("/tvoj-profil/:uid", usersControllers.yourProfile);

router.post("/prijava", usersControllers.login);

router.post("/registracija", usersControllers.register);

router.patch("/:uid", usersControllers.updateYourProfile);

router.delete("/:uid", usersControllers.deliteYourProfile);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  validateAuth,
  validateUpdateSub,
  validateUploadAvatar,
} = require("../api/validation");
const userController = require("../../controller/users");
const guard = require("../../service/guard");
const upload = require("../../service/upload");

router.post("/auth/register", validateAuth, userController.register);
router.post("/auth/login", validateAuth, userController.login);
router.post("/auth/logout", guard, userController.logout);
router.get("/current", guard, userController.currentUser);
router.patch("/", guard, validateUpdateSub, userController.updateSub);
router.patch(
  "/avatars",
  [guard, upload.single("avatar"), validateUploadAvatar],
  userController.avatars
);

module.exports = router;

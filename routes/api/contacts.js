const express = require("express");
const router = express.Router();
const contactsController = require("../../controller/contacts");
const { validateContact } = require("../api/validation");
const guard = require("../../service/guard");

router
  .get("/", guard, contactsController.listContacts)
  .post("/", guard, validateContact, contactsController.addContact);

router
  .get("/:contactId", guard, contactsController.getContactById)
  .delete("/:contactId", guard, contactsController.removeContact)
  .patch(
    "/:contactId",
    guard,
    validateContact,
    contactsController.updateContact
  );

module.exports = router;

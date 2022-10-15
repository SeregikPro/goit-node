const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContact));

module.exports = router;

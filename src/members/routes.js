const { Router } = require("express");
const {
  addMember,
  updateMember,
  getMembers,
  getMemberById,
} = require("./controller");
const routes = Router();
// add member
routes.post("/", addMember);
// update member
routes.put("/:id", updateMember);
// get all members
routes.get("/", getMembers);
// get member by id
routes.get("/:id", getMemberById);
module.exports = routes;

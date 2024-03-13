const { Router } = require("express");
const { addMember, updateMember, getMembers } = require("./controller");
const routes = Router();
// add member
routes.post("/", addMember);
// update member
routes.put("/:id", updateMember);
// get all members
routes.get("/", getMembers);
module.exports = routes;

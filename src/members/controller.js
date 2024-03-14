const pool = require("../../db");
const { updateFather, updateChild } = require("./helper");
const { getAllMembers, getMemberOne } = require("./quearys");

// add member
const addMember = (req, res) => {
  const { first_name, last_name, father, mother, child } = req.body;
  pool.query(
    "INSERT INTO members (first_name, last_name, father, mother, child) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [first_name, last_name, father, mother, child],
    (error, results) => {
      if (error) {
        throw error;
      }
      const newID = parseInt(results.rows[0].id);
      const childIds = results.rows[0].child;
      const fatherId = parseInt(results.rows[0].father);
      childIds && updateFather(newID, childIds);
      fatherId && updateChild(newID, fatherId);
      res.status(201).send({ message: "Member added successfully" });
    }
  );
};

// update member
const updateMember = (data) => {
  const id = parseInt(req.params.id);
  const { first_name, last_name, father, mother } = req.body;
  pool.query(
    "UPDATE members SET first_name = $1, last_name = $2, father = $3, mother = $4 WHERE id = $5",
    [first_name, last_name, father, mother, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send({ message: "Member updated successfully" });
    }
  );
};

// get all members
const getMembers = (req, res) => {
  pool.query(getAllMembers, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// get member by id
const getMemberById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getMemberOne, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  addMember,
  updateMember,
  getMembers,
  getMemberById,
};

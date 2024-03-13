const pool = require("../../db");

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
      childIds && updatParant(newID, childIds);
      // fatherId && updateChild()
      res.status(201).send({ message: "Member added sucsesfully" });
    }
  );
};
const updatParant = (newID, childIds = []) => {
  childIds.forEach((childId) => {
    pool.query(
      `UPDATE members SET father = $1 WHERE id = $2`,
      [newID, childId],
      (error, results) => {
        if (error) {
          throw error;
        }
      }
    );
  });
};
const updateChild = (fatherId, childIds = []) => {};

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
      res.status(200).send({ message: "Member updated sucsesfully" });
    }
  );
};

// get all members
const getMembers = (req, res) => {
  pool.query(
    `SELECT 
   *
   FROM 
  members`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  addMember,
  updateMember,
  getMembers,
};

const pool = require("../../db");
// updateFather function is used to update the father of the children when a new member is added as a father.
const updateFather = (newID, childIds = []) => {
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
// updateChild function is used to update the children of the father when a new member is added as a child.
const updateChild = (newID, fatherId) => {
  pool.query(
    `UPDATE members SET child = array_append(child, $1) WHERE id = $2`,
    [newID, fatherId],
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
};

module.exports = {
  updateFather,
  updateChild,
};

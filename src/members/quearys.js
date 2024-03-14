const getAllMembers = `
SELECT 
    m2.id,
    m2.first_name, 
    m2.last_name,
    m2.father,
    COALESCE(
        json_agg(
            CASE
                WHEN m1.id IS NULL THEN NULL
                ELSE json_build_object(
                    'id', m1.id,
                    'first_name', m1.first_name,
                    'last_name', m1.last_name
                )
            END
        ), 
        '[]' 
    ) AS child
FROM 
    members m2 
LEFT JOIN members m1 ON m2.id = m1.father
GROUP BY
m2.id, m2.first_name, m2.last_name, m2.father
`;

const getMemberOne = `SELECT 
m2.id,
m2.first_name, 
m2.last_name,
m2.father,
COALESCE(
    json_agg(
        CASE
            WHEN m1.id IS NULL THEN NULL
            ELSE json_build_object(
                'id', m1.id,
                'first_name', m1.first_name,
                'last_name', m1.last_name
            )
        END
    ), 
    '[]' 
) AS child
FROM 
members m2 
LEFT JOIN members m1 ON m2.id = m1.father
WHERE
m2.id = $1
GROUP BY
m2.id, m2.first_name, m2.last_name, m2.father`;

module.exports = {
  getAllMembers,
  getMemberOne,
};

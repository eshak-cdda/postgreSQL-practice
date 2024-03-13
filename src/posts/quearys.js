const postQuery = `SELECT 
u.full_name as author,
p.id as post_id,
p.text,
p.created_at
FROM posts p
LEFT JOIN users u ON p.user_id = u.id`;

module.exports = { postQuery };

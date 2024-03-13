const postQuery = `SELECT 
p.id as post_id,
p.title,
p.text,
u.full_name as author,
p.created_at
FROM posts p
LEFT JOIN users u ON p.user_id = u.id`;

module.exports = { postQuery };

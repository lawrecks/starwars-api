export default {
  countComments: `
    SELECT 
        episode_id,
        count(*) AS total
    FROM 
        comments
    WHERE episode_id = ANY($1)
    GROUP BY episode_id
    `,
  addComment: `
    INSERT INTO comments(
      episode_id,
      content,
      commenter_ip
    )
    VALUES
      ($1, $2, $3)
    RETURNING *`,
  getComments: `
    SELECT
      id, 
      episode_id,
      content,
      commenter_ip,
      created_at,
      updated_at
    FROM 
      comments
    WHERE episode_id = ($1)
    ORDER BY created_at DESC`,
};

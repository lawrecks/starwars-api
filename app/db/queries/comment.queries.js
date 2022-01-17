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
};

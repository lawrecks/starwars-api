CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    episode_id INTEGER NOT NULL,
    commenter_ip VARCHAR NOT NULL,
    content VARCHAR(500),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW() 
);
CREATE DATABASE IF NOT EXISTS jollyswipe;

USE jollyswipe;

CREATE TABLE posts (
  id VARCHAR(36) PRIMARY KEY,
  type ENUM('basic', 'detailed', 'trivia') NOT NULL,
  category ENUM('quotes', 'movies', 'funFacts', 'memes', 'trivia', 'jokes', 'shortStories', 'all') NOT NULL,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  likes INT DEFAULT 0,
  is_liked BOOLEAN DEFAULT FALSE,
  is_bookmarked BOOLEAN DEFAULT FALSE
);

CREATE TABLE trivia_options (
  id VARCHAR(36) PRIMARY KEY,
  post_id VARCHAR(36),
  text VARCHAR(255) NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- Insert sample data
INSERT INTO posts (id, type, category, title, image, created_at, likes) 
VALUES 
  ('1', 'basic', 'quotes', '"The only way to do great work is to love what you do." - Steve Jobs', 
   'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=800&h=800&fit=crop', 
   NOW(), 1234);
DROP DATABASE IF EXISTS comment;

CREATE DATABASE comment;
DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
comments_id SERIAL PRIMARY KEY,
    "comments" text
);


INSERT INTO comments (comments) VALUES ('All about american muscle.');
INSERT INTO comments (comments) VALUES ('The best sound to hear are turbos spooling');
INSERT INTO comments (comments) VALUES ('How many horses can you fit under your hood');
INSERT INTO comments (comments) VALUES ('Is it weird whenever i turn a corner im going sideways?');
INSERT INTO comments (comments) VALUES ('Oil leaks are kind of bad but how about fuel leaks?');
INSERT INTO comments (comments) VALUES ('Bugatti"s" are the fastest cars in the world');
BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) VALUES ('German', 'german@mail.com', 5, '2022-01-01'); 
INSERT INTO login (hash, email) VALUES ('$2a$12$GU69H0i5WPZ0tbWatGSq7.uxieB4Pqf7v6YJjW0A6HYeRWEiRmonO', 'german@mail.com'); 

COMMIT; 
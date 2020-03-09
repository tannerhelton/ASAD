CREATE TABLE users ( 
    userid CHAR(21),
    email VARCHAR(255),
    given_name VARCHAR(255),
    family_name VARCHAR(255),
    PRIMARY KEY(userid)
);

INSERT INTO users(userid, email, given_name, family_name)
VALUES('1234', 'test@test.com', 'james', 'clark');

SELECT * FROM users;
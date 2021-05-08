CREATE TABLE users(
   user_id BiGSERIAL,
   user_name varchar(32) not null,
   user_age INT not null,
   referal_id INT NOT NULL REFERENCES referal (referal_id)
);


CREATE TABLE referal (
     referal_id BIGSERIAL NOT NULL PRIMARY KEY,
     referal_name VARCHAR(64) NOT NULL
)
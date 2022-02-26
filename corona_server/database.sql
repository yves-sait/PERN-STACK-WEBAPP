-- CREATE DATABASE corona;

-- CREATE TABLE towns(
--     id SERIAL PRIMARY KEY,
--     town_name VARCHAR(50) UNIQUE

-- );

CREATE TABLE intowns(
    id SERIAL PRIMARY KEY,
    town_name VARCHAR(50) UNIQUE

);

CREATE TABLE main(
    report_date DATE not null UNIQUE,
    total_cases INTEGER,
    active_cases INTEGER,
    new_active INTEGER,
    total_recoveries INTEGER,
    new_recovery INTEGER,
    total_deaths INTEGER,
    new_death INTEGER

);

CREATE TABLE daily(
    id SERIAL,
    report_date DATE not null,
    town_id INTEGER REFERENCES intowns(id) ON DELETE CASCADE,
    new_active INTEGER,
    new_recovery INTEGER,
    new_death INTEGER,
    active_cases INTEGER
);


-- pg_ctl -D /usr/local/var/postgres start
--  psql -U postgres
-- \l -> check all database
-- \c -> \c dbname to go inside db
--SELECT * FROM pg_stat_activity  check queries
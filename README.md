# School API

Code which contains the School REST API in Node.js with Express and MySQL.

---

To run this code locally, do the following:

1. Clone the repository into a local folder
2. In terminal, type `npm install` to install the required files
3. Configure the database using `databaseConfig.js`, edit user/password if needed.
4. Next, type `node server.js` to start the server

---

To set-up the mySQL database, execute the query below:

```sql
CREATE DATABASE school;

use school;

CREATE TABLE teacher(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(70) NOT NULL,
  email varchar(120) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE student(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(70) NOT NULL,
  email varchar(120) NOT NULL,
  isSuspended bit(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE register(
  teacherEmail varchar(120) REFERENCES `teacher` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  studentEmail varchar(120) REFERENCES `student` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (teacherEmail, studentEmail)
);

INSERT INTO TEACHER(name, email) VALUE('Ken', 'teacherken@gmail.com');

INSERT INTO TEACHER(name, email) VALUE('Joe', 'teacherjoe@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Mary', 'studentmary@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Agnes', 'studentagnes@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Bob', 'studentbob@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Miche', 'studentmiche@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Hon', 'studenthon@gmail.com');

INSERT INTO STUDENT(name, email) VALUE('Jon', 'studentjon@gmail.com');
```

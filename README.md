# programmeerimine2_projekt


DOCUMENTATION:


Server: localhost
port: 4000


/// TEAHCERS ENDPOINT


db.teachers formula:
Teacher {
  id: number;
  firstName: string;
  lastName: string;
}


local address:(localhost:4000/teachers)

API method (url):
get('/teachers',) - gives back all teachers from database
get("/teachers/:id"), - gives back 1 teacher by id from database
delete("/teachers/:id") - delete teacher by id from database
put('/teachers/:id') - update teacher by id from database
post('/teachers') - adds 1 teacher to databse. ID is genereted automatically, input formula {
  firstName: "string";
  lastName: "string";
}


//ROOMS ENDPOINT

db.room formula:
Room {
  id: number;
  roomNumber: number;
}


local address:(localhost:4000/rooms)

API method (url):

get('/rooms' ) - gives back all rooms from database
get("/rooms/:id") - gives back 1 room by id from database
delete("/rooms/:id") - delete room by id from database
put('/rooms/:id') - update room by id from database
post('/rooms') - - adds 1 room to databse. ID is genereted automatically, input formula {
  roomNumber: number;
}


//SUBJECTS ENDPOINT

db.subjects formula:
Subject {
  id: number;
  subjectName: number;
}


local address:(localhost:4000/subjects)

API method (url):

get('/subjects') - gives back all subjects from database
get("/subjects/:id") - gives back 1 subject by id from database
delete("/subjects/:id") - delete subject by id from database
put('/subjects/:id') - update subject by id from database
post('/subjects') - adds 1 subject to databse. ID is genereted automatically, input formula {
  subjectName: number;
}

//COURSES ENDPOINT

db.courses formula:
Course {
  id: number;
  subjectName: number;
}


local address:(localhost:4000/courses)

API method (url):

get('/courses') - gives back all courses from database
get("/courses/:id") - gives back 1 course by id from database
delete("/courses/:id") - delete course by id from database
put('/courses/:id') - update course by id from database
post('/courses') - adds 1 course to databse. ID is genereted automatically, input formula {
  courseName: number;
}

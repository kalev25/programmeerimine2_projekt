/**
* Import express framework
*/
import express, { Request, Response, Application, request, response} from "express";
import { DebugLoggerFunction } from "util";
const app: Application = express();
app.use(express.json());

import db from './db';
import teachersController from './components/teachers/controller';
import roomsController from './components/rooms/controller';
import subjectsController from './components/subjects/controller';
import coursesController from './components/courses/controller';

import responseCodes from './components/general/responseCodes';
import { port } from './components/general/settings';
import logger from './components/general/loggerMiddleware';


//const port: number = 4000;
const notFound: number = responseCodes.notFound;


/// TEAHCERS ENDPOINT

app.get("/ping", (req: Request, res: Response) => {
    res.status(responseCodes.ok).json({
        message: "Hello world!",
    });
});

app.get('/teachers', teachersController.getAllTeachers);
app.get("/teachers/:id", teachersController.getTeacherById);
app.delete("/teachers/:id", teachersController.removeTeacher);
app.put('/teachers/:id', teachersController.updateTeacher);
app.post('/teachers', teachersController.createTeacher);


//ROOMS ENDPOINT

app.get('/rooms', roomsController.getAllRooms);
app.get("/rooms/:id", roomsController.getRoomById);
app.delete("/rooms/:id", roomsController.removeRoom);
app.put('/rooms/:id', roomsController.updateRoom);
app.post('/rooms', roomsController.createRoom);


//SUBJECTS ENDPOINT

app.get('/subjects', subjectsController.getAllsubjects);
app.get("/subjects/:id", subjectsController.getSubjectById);
app.delete("/subjects/:id", subjectsController.removeSubject);
app.put('/subjects/:id', subjectsController.updateSubject);
app.post('/subjects', subjectsController.createSubject);

//COURSES ENDPOINT

app.get('/courses', coursesController.getAllCourses);
app.get("/courses/:id", coursesController.getCourseById);
app.delete("/courses/:id", coursesController.removeCourse);
app.put('/courses/:id', coursesController.updateCourse);
app.post('/courses', coursesController.createCourse);


app.listen(port, () => {
    console.log(`Server is running`, {port});
  });
/**
* Import express framework
*/
import express, { Request, Response, Application, request, response} from "express";
import { DebugLoggerFunction } from "util";
const app: Application = express();
app.use(express.json());

import db from './db';
import teachersController from './components/teachers/controller';

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


//ROOM ENDPOINT
app.get("/rooms", (req: Request, res: Response) => {
    res.status(responseCodes.ok).json({
        rooms: db.rooms,	
    });
});

app.get("/rooms/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const room = db.rooms.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(responseCodes.ok).json({
        room	
    });
});


app.delete("/rooms/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.rooms.find((room) => room.id === id);
    if (deleted) {
        console.log(deleted);
        db.rooms = db.rooms.filter(room => room.id !== id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(responseCodes.notFound).json({ message: "room you are looking for does not exist"});
    }
});

app.put('/rooms/:id', (req: Request, res: Response) => {
    const { roomNumber } = req.body;
    const id: number = parseInt(req.params.id);
    const change = db.rooms.find((room) => room.id === id);

    if (change) {
        console.log(change);
        db.rooms = db.rooms.filter(room => room.id !== id);
        db.rooms.push({
            id,
            roomNumber,

        });
        res.status(responseCodes.ok).json({                   
            id
        })
    }else{  
        res.status(responseCodes.notFound).json({ message: "room you are looking for does not exist"});
    }
});


app.post('/rooms', (req: Request, res: Response) => {
    const { roomNumber } = req.body;
    const id = db.rooms.length + 1;
    db.rooms.push({
        id,
        roomNumber,
    });

    res.status(responseCodes.created).json({
        id,
        
    })
});

//subject ENDPOINT

app.get("/subject", (req: Request, res: Response) => {
    res.status(responseCodes.ok).json({
        subject: db.subject,	
    });
});

app.get("/subject/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const subject = db.subject.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(responseCodes.ok).json({
        subject	
    });
});


app.delete("/subject/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.subject.find((subject) => subject.id === id);
    if (deleted) {
        console.log(deleted);
        db.subject = db.subject.filter(subject => subject.id !== id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(responseCodes.notFound).json({ message: "subject you are looking for does not exist"});
    }
});

app.put('/subject/:id', (req: Request, res: Response) => {
    const { subjectName } = req.body;
    const id: number = parseInt(req.params.id);
    const change = db.subject.find((subject) => subject.id === id);

    if (change) {
        console.log(change);
        db.subject = db.subject.filter(subject => subject.id !== id);
        db.subject.push({
            id,
            subjectName,

        });
        res.status(responseCodes.ok).json({                   
            id
        })
    }else{  
        
        res.status(notFound).json({ message: "subject you are looking for does not exist"});
    }
});


app.post('/subject', (req: Request, res: Response) => {
    const { subjectName } = req.body;
    const id = db.subject.length + 1;
    db.subject.push({
        id,
        subjectName,
    });

    res.status(responseCodes.created).json({
        id,
        
    })
});
 
//course ENDPOINT

app.get("/course", (req: Request, res: Response) => {
    res.status(responseCodes.ok).json({
        course: db.course,	
    });
});

app.get("/course/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const course = db.course.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(responseCodes.ok).json({
        course	
    });
});


app.delete("/course/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.course.find((course) => course.id === id);
    if (deleted) {
        console.log(deleted);
        db.course = db.course.filter(course => course.id !== id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(responseCodes.notFound).json({ message: "course you are looking for does not exist"});
    }
});

app.put('/course/:id', (req: Request, res: Response) => {
    const { courseName } = req.body;
    const id: number = parseInt(req.params.id);
    const change = db.course.find((course) => course.id === id);

    if (change) {
        console.log(change);
        db.course = db.course.filter(course => course.id !== id);
        db.course.push({
            id,
            courseName,

        });
        res.status(responseCodes.ok).json({                   
            id
        })
    }else{  
        
        res.status(notFound).json({ message: "course you are looking for does not exist"});
    }
});


app.post('/course', (req: Request, res: Response) => {
    const { courseName } = req.body;
    const id = db.course.length + 1;
    db.course.push({
        id,
        courseName,
    });

    res.status(responseCodes.created).json({
        id,
        
    })
});


app.listen(port, () => {
    console.log(`Server is running`, {port});
  });
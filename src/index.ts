import express, { Request, Response, Application, request, response} from "express";
import { DebugLoggerFunction } from "util";
const app: Application = express();
app.use(express.json());

const port: number = 4000;
const ok: number = 200;
const created: number = 201;
const deleted: number = 404;

let db = {
    teachers: [
        {
        id: 1,
        firstName: 'Ulvi',
        lastName: 'Muld',
        },
        {
        id: 2,
        firstName: 'Pioter',
        lastName: 'Malavohvski',
        }
    ],
    rooms: [
        {
        id: 1,
        roomNumber: 305,
        },
        {
        id: 2,
        roomNumber: 210
        }
    ],
    course: [
        {
        id: 1,
        courseName: "RIF20",
        },
        {
        id: 2,
        courseName: "RIF12"
        }
    ],
    subject: [
        {
        id: 1,
        subjectName: "Keemia",
        },
        {
        id: 2,
        subjectname: "Arvuti6petus"
        }
    ]
  
}

/// TEAHCERS ENDPOINT

app.get("/ping", (req: Request, res: Response) => {
    res.status(ok).json({
        message: "Hello world!",
    });
});

app.get("/teachers", (req: Request, res: Response) => {
    res.status(ok).json({
        teachers: db.teachers,	
    });
});

app.get("/teachers/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const teacher = db.teachers.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(ok).json({
        teacher	
    });
});

app.delete("/teachers/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.teachers.find((teacher) => teacher.id === id);
    if (deleted) {
        console.log(deleted);
        db.teachers = db.teachers.filter(teacher => teacher.id !== id);
        res.status(ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "Teacher you are looking for does not exist"});
    }
});

app.put('/teachers/:id', (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const id: number = parseInt(req.params.id);
    const change = db.teachers.find((teacher) => teacher.id === id);

    if (change) {
        console.log(change);
        db.teachers = db.teachers.filter(teacher => teacher.id !== id);
        db.teachers.push({
            id,
            firstName,
            lastName,
        });
        res.status(ok).json({                   
            id
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "Teacher you are looking for does not exist"});
    }
});


app.post('/teachers', (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const id = db.teachers.length + 1;
    db.teachers.push({
        id,
        firstName,
        lastName,
    });

    res.status(created).json({
        id,
        
    })
});


//ROOM ENDPOINT
app.get("/rooms", (req: Request, res: Response) => {
    res.status(ok).json({
        rooms: db.rooms,	
    });
});

app.get("/rooms/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const room = db.rooms.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(ok).json({
        room	
    });
});


app.delete("/rooms/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.rooms.find((room) => room.id === id);
    if (deleted) {
        console.log(deleted);
        db.rooms = db.rooms.filter(room => room.id !== id);
        res.status(ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "room you are looking for does not exist"});
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
        res.status(ok).json({                   
            id
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "room you are looking for does not exist"});
    }
});


app.post('/rooms', (req: Request, res: Response) => {
    const { roomNumber } = req.body;
    const id = db.rooms.length + 1;
    db.rooms.push({
        id,
        roomNumber,
    });

    res.status(created).json({
        id,
        
    })
});

//subject ENDPOINT

app.get("/subject", (req: Request, res: Response) => {
    res.status(ok).json({
        subject: db.subject,	
    });
});

app.get("/subject/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const subject = db.subject.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(ok).json({
        subject	
    });
});


app.delete("/subject/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.subject.find((subject) => subject.id === id);
    if (deleted) {
        console.log(deleted);
        db.subject = db.subject.filter(subject => subject.id !== id);
        res.status(ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "subject you are looking for does not exist"});
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
        res.status(ok).json({                   
            id
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "subject you are looking for does not exist"});
    }
});


app.post('/subject', (req: Request, res: Response) => {
    const { subjectName } = req.body;
    const id = db.subject.length + 1;
    db.subject.push({
        id,
        subjectName,
    });

    res.status(created).json({
        id,
        
    })
});
 
//course ENDPOINT

app.get("/course", (req: Request, res: Response) => {
    res.status(ok).json({
        course: db.course,	
    });
});

app.get("/course/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const course = db.course.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(ok).json({
        course	
    });
});


app.delete("/course/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = db.course.find((course) => course.id === id);
    if (deleted) {
        console.log(deleted);
        db.course = db.course.filter(course => course.id !== id);
        res.status(ok).json({
            deleted
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "course you are looking for does not exist"});
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
        res.status(ok).json({                   
            id
        })
    }else{  
        console.log(deleted);
        res.status(404).json({ message: "course you are looking for does not exist"});
    }
});


app.post('/course', (req: Request, res: Response) => {
    const { courseName } = req.body;
    const id = db.course.length + 1;
    db.course.push({
        id,
        courseName,
    });

    res.status(created).json({
        id,
        
    })
});

app.listen(port, () => {
    console.log(`Server is running`);
  });
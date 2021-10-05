/**
 * Mock database
 */

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
  
};

export default db;
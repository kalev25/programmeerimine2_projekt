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
    courses: [
        {
        id: 1,
        courseName: "RIF20",
        },
        {
        id: 2,
        courseName: "RIF12"
        }
    ],
    subjects: [
        {
        id: 1,
        subjectName: "Keemia",
        },
        {
        id: 2,
        subjectName: "Arvuti6petus"
        }
    ]
  
};

export default db;
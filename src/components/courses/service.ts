import db from '../../db';
import Teacher from './interfaces';

const teachersService = {
  getAllTeachers: (): Teacher[] => {
    const { teachers } = db;
    return teachers;
  },
  /**
   * Returns teacher or undefined
   */
  getTeacherById: (id: number): Teacher | undefined => {
    const teacher = db.teachers.find((element) => element.id === id);
    return teacher;
  },
  removeTeacher: (id: number): boolean => {
	db.teachers = db.teachers.filter(teacher => teacher.id !== id);
    return true;
  },
  createTeacher: (firstName: string, lastName: string) => {
    const id = db.teachers.length + 1;
    db.teachers.push({
      id,
      firstName,
      lastName,
    });
    return id;
  },
  updateTeacher: (data: { id: number, firstName: string, lastName: string}): boolean => {
    const { id, firstName, lastName } = data;
    const index = db.teachers.findIndex((element) => element.id === id);
    if (firstName) {
      db.teachers[index].firstName = firstName;
    }
    if (lastName) {
      db.teachers[index].lastName = lastName;
    }
    return true;
  },
};

export default teachersService;

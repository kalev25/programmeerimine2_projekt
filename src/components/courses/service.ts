import db from '../../db';
import Course from './interfaces';

const coursesService = {
  getAllCourses: (): Course[] => {
    const { courses } = db;
    return courses;
  },
  /**
   * Returns course or undefined
   */
  getCourseById: (id: number): Course | undefined => {
    const course = db.courses.find((element) => element.id === id);
    return course;
  },
  removeCourse: (id: number): boolean => {
	db.courses = db.courses.filter(course => course.id !== id);
    return true;
  },
  createCourse: (courseName: string) => {
    const id = db.courses.length + 1;
    db.courses.push({
      id,
      courseName,
    });
    return id;
  },
  updateCourse: (data: { id: number, courseName: string}): boolean => {
    const { id, courseName} = data;
    const index = db.courses.findIndex((element) => element.id === id);
    if (courseName) {
      db.courses[index].courseName = courseName;
    }
    return true;
  },
};

export default coursesService;

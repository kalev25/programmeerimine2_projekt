import db from '../../db';
import Subject from './interfaces';

const subjectsService = {
  getAllsubjects: (): Subject[] => {
    const { subjects } = db;
    return subjects;
  },
  /**
   * Returns subject or undefined
   */
  getsubjectById: (id: number): Subject | undefined => {
    const subject = db.subjects.find((element) => element.id === id);
    return subject;
  },
  removesubject: (id: number): boolean => {
	db.subjects = db.subjects.filter(subject => subject.id !== id);
    return true;
  },
  createsubject: (subjectName: string) => {
    const id = db.subjects.length + 1;
    db.subjects.push({
      id,
      subjectName,
    });
    return id;
  },
  updatesubject: (data: { id: number, subjectName: string}): boolean => {
    const { id, subjectName} = data;
    const index = db.subjects.findIndex((element) => element.id === id);
    if (subjectName) {
      db.subjects[index].subjectName = subjectName;
    }
    return true;
  },
};

export default subjectsService;

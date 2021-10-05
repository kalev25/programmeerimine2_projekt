/**
 * User interface
 */
 interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
}

interface UpdateTeacher {
  id: number;
  firstName?: string;
  lastName?: string;
}

export default Teacher;
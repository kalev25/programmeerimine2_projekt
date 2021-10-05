import { Request, Response } from 'express';
import { servicesVersion } from 'typescript';
import responseCodes from '../general/responseCodes';
import coursesService from './service';

const coursesController = {
getAllCourses: (req: Request, res: Response) => {
	const Courses = coursesService.getAllCourses();
	return res.status(responseCodes.ok).json({
		Courses,
	});

},
	
getCourseById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const Course = coursesService.getCourseById(id);
    if (!Course) {	
      return res.status(responseCodes.badRequest).json({
        error: `No Course found with id: ${id}`,
      });
	  
    }
    return res.status(responseCodes.ok).json({
      Course,
    });
},

removeCourse: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = coursesService.getCourseById(id);
    if (deleted) {
        coursesService.removeCourse(id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        res.status(responseCodes.notFound).json({ message: "Course you are looking for does not exist"});
    }
},

updateCourse: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { courseName } = req.body;
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    if (!courseName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Nothing to update',
      });
    }
    const Course = coursesService.getCourseById(id);
    if (!Course) {
      return res.status(responseCodes.badRequest).json({
        error: `No Course found with id: ${id}`,
      });
    }
    coursesService.updateCourse({ id, courseName });
    return res.status(responseCodes.noContent).json({});
  },

  createCourse: (req: Request, res: Response) => {
    const { CourseName } = req.body;
    if (!CourseName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Course number is required',
      });
    }
 	const id = coursesService.createCourse(CourseName);
    return res.status(responseCodes.created).json({
      id,
    });
  },
  
};

export default coursesController;
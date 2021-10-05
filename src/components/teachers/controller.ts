import { Request, Response, Application } from 'express';
import { servicesVersion } from 'typescript';
import responseCodes from '../general/responseCodes';
import teachersService from './service';






const teachersController = {
getAllTeachers: (req: Request, res: Response) => {
	const teachers = teachersService.getAllTeachers();
	return res.status(responseCodes.ok).json({
		teachers,
	});

},
	
getTeacherById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const teacher = teachersService.getTeacherById(id);
    if (!teacher) {	
      return res.status(responseCodes.badRequest).json({
        error: `No teacher found with id: ${id}`,
      });
	  
    }
    return res.status(responseCodes.ok).json({
      teacher,
    });
},

removeTeacher: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = teachersService.getTeacherById(id);
    if (deleted) {
        teachersService.removeTeacher(id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        res.status(responseCodes.notFound).json({ message: "Teacher you are looking for does not exist"});
    }
},

updateTeacher: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { firstName, lastName } = req.body;
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    if (!firstName && !lastName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Nothing to update',
      });
    }
    const teacher = teachersService.getTeacherById(id);
    if (!teacher) {
      return res.status(responseCodes.badRequest).json({
        error: `No teacher found with id: ${id}`,
      });
    }
    teachersService.updateTeacher({ id, firstName, lastName });
    return res.status(responseCodes.noContent).json({});
  },

  createTeacher: (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    if (!firstName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Firstsa name is required',
      });
    }
    if (!lastName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Last name is required',
      });
    }
 	const id = teachersService.createTeacher(firstName, lastName);
    return res.status(responseCodes.created).json({
      id,
    });
  },
  
};

export default teachersController;
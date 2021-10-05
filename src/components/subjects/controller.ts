import { Request, Response } from 'express';
import { servicesVersion } from 'typescript';
import responseCodes from '../general/responseCodes';
import subjectsService from './service';

const subjectsController = {
getAllsubjects: (req: Request, res: Response) => {
	const subjects = subjectsService.getAllsubjects();
	return res.status(responseCodes.ok).json({
		subjects,
	});

},
	
getSubjectById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const subject = subjectsService.getsubjectById(id);
    if (!subject) {	
      return res.status(responseCodes.badRequest).json({
        error: `No subject found with id: ${id}`,
      });
	  
    }
    return res.status(responseCodes.ok).json({
      subject,
    });
},

removeSubject: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deleted = subjectsService.getsubjectById(id);
    if (deleted) {
        subjectsService.removesubject(id);
        res.status(responseCodes.ok).json({
            deleted
        })
    }else{  
        res.status(responseCodes.notFound).json({ message: "subject you are looking for does not exist"});
    }
},

updateSubject: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { subjectName } = req.body;
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    if (!subjectName) {
      return res.status(responseCodes.badRequest).json({
        error: 'Nothing to update',
      });
    }
    const subject = subjectsService.getsubjectById(id);
    if (!subject) {
      return res.status(responseCodes.badRequest).json({
        error: `No subject found with id: ${id}`,
      });
    }
    subjectsService.updatesubject({ id, subjectName });
    return res.status(responseCodes.noContent).json({});
  },

  createSubject: (req: Request, res: Response) => {
    const { subjectName } = req.body;
    if (!subjectName) {
      return res.status(responseCodes.badRequest).json({
        error: 'subject number is required',
      });
    }
 	const id = subjectsService.createsubject(subjectName);
    return res.status(responseCodes.created).json({
      id,
    });
  },
  
};

export default subjectsController;
import { Request, Response, NextFunction } from 'express';
import responseCodes from './responseCodes';

const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log(`${req.url}, ${new Date().toISOString()}`);
  
	if (req.method == "POST") {
		if(req.path == "/teachers"){
			const { firstName, lastName } = req.body;
			if (!firstName || typeof firstName != "string") {
				return res.status(responseCodes.badRequest).json({error: 'First name is required',});
			}
			if (!lastName || typeof firstName != "string") {
				return res.status(responseCodes.badRequest).json({error: 'Last name is required',});
			}else{
				next();
			}
		}
		if(req.path == "/subjects"){
			const { subjectName } = req.body;
			if(!subjectName || typeof subjectName != "string") {
				return res.status(responseCodes.badRequest).json({error: 'Subject name is required',});
			}else{
				next();
			}
		}
		if(req.path == "/courses"){
			const { courseName } = req.body;
			if(!courseName || typeof courseName != "string") {
				return res.status(responseCodes.badRequest).json({error: 'Course name is required',});
			}else{
				next();
			}
		}
		if(req.path == "/rooms"){
			const { roomNumber } = req.body;
			if(!roomNumber || typeof roomNumber != "number") {
				return res.status(responseCodes.badRequest).json({error: 'Room number is required',});
			}else{
				next();
			}
		}
	}else{
		next();
	}
};

export default logger;
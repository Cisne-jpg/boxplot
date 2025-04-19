import { Request, Response, NextFunction } from 'express';
import StudentController from '../controllers/students';

const studentController = new StudentController();

class StudentHttpHandler {
  async getStudents(request: Request, response: Response, next: NextFunction) {
    try {
      const results = studentController.getFinalResults();
      response.json({ alumno: results });
    } catch (error) {
      next(error);
    }
  }
}

export default StudentHttpHandler;

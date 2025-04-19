import express from 'express';
import StudentHttpHandler from '../handlers/students';

const router = express.Router();
const studentHandler = new StudentHttpHandler();


router.get('/', studentHandler.getStudents);

export default router;
